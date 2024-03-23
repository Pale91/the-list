import { z } from 'zod';

export enum ItemState {
  COMPLETED = 'completed',
  PENDING = 'pending',
  IN_REVIEW = 'inReview',
  REJECTED = 'rejected'
}

const itemStateSchema = z.nativeEnum(ItemState);

const ItemSchema = z.object({
  id: z.string(),
  name: z.string().max(30, 'Name cannot be exceed 30 characters long'),
  description: z
    .string()
    .max(50, 'Description cannot be exceed 50 characters')
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
  state: itemStateSchema,
  plannedDate: z.date().nullable().default(null),
  creationDate: z.date(),
  completionDate: z.date().nullable().default(null),
  referUserId: z.string().nullable().default(null),
  votes: z.number().default(0)
});

export type Item = z.infer<typeof ItemSchema>;

export default ItemSchema;
