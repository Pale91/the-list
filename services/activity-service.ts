'use server';

import { addActivity } from '@/repositories/activity/activity-repository';
import ActivitySchema, {
  Activity,
  ActivityState
} from '@/repositories/activity/activity-types';

const CreateActivitySchema = ActivitySchema.omit({ id: true });

export async function createActivity(formData: FormData) {
  console.log('planned date', formData.get('plannedDate'));

  const newItem: Omit<Activity, 'id'> = CreateActivitySchema.parse({
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

  addActivity(newItem);
  console.log('Item added');
}
