'use server';

import { addActivity } from '@/repositories/activity/activity-repository';
import ActivitySchema, {
  Activity,
  ActivityState
} from '@/repositories/activity/activity-types';
import { ZodError } from 'zod';

const CreateActivitySchema = ActivitySchema.omit({ id: true });

export async function createActivity(
  currentState: ZodError<Activity>['issues'] | undefined,
  formData: FormData
) {
  console.log('planned date', formData.get('plannedDate'));

  const result = CreateActivitySchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    location: formData.get('location'),
    locationLink: formData.get('locationLink'),
    state: ActivityState.PENDING,
    plannedDate: formData.get('plannedDate') || null,
    completionDate: null,
    creationDate: new Date(),
    referUserId: null
  });

  if (!result.success) {
    console.log('error server ', JSON.stringify(result.error, null, 2));
    return result.error.issues;
  }

  await addActivity(result.data);
  console.log('Item added');
}
