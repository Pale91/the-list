'use server';

import { addActivity } from '@/repositories/activity/activity-repository';
import ActivitySchema, {
  Activity,
  ActivityState
} from '@/repositories/activity/activity-types';
import { ZodError, ZodFormattedError, z } from 'zod';

const supportedFileTypesByBuffer = [];

const CreateActivitySchema = ActivitySchema.omit({ id: true }).extend({
  picture: z
    .instanceof(File)
    .optional()
    .refine(
      async (file: File | undefined) => {
        if (file === undefined) {
          return true;
        }

        // Read the magic number of the file
        const blobSlice = file.slice(0, 4);
        const buffer = await blobSlice.arrayBuffer();

        const magicNumber = new Uint8Array(buffer);
        var header = '';
        for (var i = 0; i < magicNumber.length; i++) {
          header += magicNumber[i].toString(16);
        }
        console.log('FILE TYPE', header);

        // Add your logic to check the magic number and return true or false accordingly
      },
      {
        message: 'The submitted picture is not a supported file type.'
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
    picture: formData.get('file')
  });

  if (!result.success) {
    console.log('error server ', JSON.stringify(result.error, null, 2));
    return result.error.format();
  }

  const { picture, ...itemData } = result.data;

  await addActivity(itemData);
  console.log('Item added');
}
