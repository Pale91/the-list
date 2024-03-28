'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import {
  FILE_FORMATS,
  validateFileFormat
} from '@/common/utils/file-validator';
import { addActivity } from '@/repositories/activity/activity-repository';
import ActivitySchema, {
  Activity,
  ActivityState
} from '@/repositories/activity/activity-types';
import { uploadImage } from '@/repositories/activity/files-repository';
import { getServerSession } from 'next-auth';
import { ZodFormattedError, z } from 'zod';

const supportedFileTypes: FILE_FORMATS[] = [
  FILE_FORMATS.PNG,
  FILE_FORMATS.JPEG
];

const CreateActivitySchema = ActivitySchema.omit({
  id: true
}).extend({
  picture: z
    .instanceof(File)
    .optional()
    .refine(
      async (file: File | undefined | null) => {
        if (file === undefined || file === null || file.size === 0) {
          return true;
        }

        return await validateFileFormat(file, ...supportedFileTypes);
      },
      {
        message: `The submitted picture is not a supported file type. ${JSON.stringify(supportedFileTypes)}`
      }
    )
});

export async function createActivity(
  currentState: ZodFormattedError<Activity> | undefined,
  formData: FormData
) {
  const session = await getServerSession(authOptions);
  if (session?.user === undefined) {
    throw new Error('User not authenticated');
  }

  const result = await CreateActivitySchema.safeParseAsync({
    name: formData.get('name'),
    description: formData.get('description'),
    location: formData.get('location'),
    locationLink: formData.get('locationLink') || null,
    state: ActivityState.PENDING,
    plannedDate: formData.get('plannedDate') || null,
    completionDate: null,
    creationDate: new Date(),
    referUserId: null,
    picture: formData.get('picture')
  });

  if (!result.success) {
    return result.error.format();
  }

  let imageName: string | null = null;
  if (result.data.picture !== undefined) {
    imageName = await uploadImage(result.data.picture);
  }

  const { picture, ...itemData } = result.data;
  itemData.image = imageName;
  itemData.referUserId = session.user.id;

  await addActivity(itemData);
  console.log('Item added');
}
