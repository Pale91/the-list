'use server';

import {
  FILE_FORMATS,
  validateFileFormat
} from '@/common/utils/file-validator';
import { addActivity } from '@/repositories/activity/activity-repository';
import ActivitySchema, {
  Activity,
  ActivityState
} from '@/repositories/activity/activity-types';
import { ZodError, ZodFormattedError, z } from 'zod';

const supportedFileTypes: FILE_FORMATS[] = [
  FILE_FORMATS.PNG,
  FILE_FORMATS.JPEG
];

const CreateActivitySchema = ActivitySchema.omit({ id: true }).extend({
  picture: z
    .instanceof(File)
    .optional()
    .refine(
      async (file: File | undefined) => {
        if (file === undefined) {
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
  console.log('planned date', formData.get('plannedDate'));

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
    console.log('error server ', JSON.stringify(result.error, null, 2));
    return result.error.format();
  }

  const { picture, ...itemData } = result.data;

  await addActivity(itemData);
  console.log('Item added');
}
