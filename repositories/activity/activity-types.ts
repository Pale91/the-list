import { z } from 'zod';

export enum ActivityState {
  COMPLETED = 'completed',
  PENDING = 'pending',
  IN_REVIEW = 'inReview',
  REJECTED = 'rejected'
}

const activityStateSchema = z.nativeEnum(ActivityState);

const ActivitySchema = z.object({
  id: z.string(),
  name: z.string().max(30, 'Name cannot exceed 30 characters long'),
  description: z
    .string()
    .max(50, 'Description cannot exceed 50 characters long')
    .nullable()
    .default(null),
  location: z
    .string()
    .max(30, 'Location cannot be exceed 30 characters long')
    .nullable()
    .default(null),
  locationLink: z
    .string()
    .url('Location link must be a valid URL including http or https')
    .nullable()
    .default(null),
  state: activityStateSchema,
  plannedDate: z.date().nullable().default(null),
  creationDate: z.date(),
  completionDate: z.date().nullable().default(null),
  referUserId: z.string().nullable().default(null),
  votes: z.number().default(0)
});

export type Activity = z.infer<typeof ActivitySchema>;

export default ActivitySchema;
