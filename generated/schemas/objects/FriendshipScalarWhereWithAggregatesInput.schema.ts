import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const friendshipscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FriendshipScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FriendshipScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FriendshipScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FriendshipScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FriendshipScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  other_user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  friendship_request_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FriendshipScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FriendshipScalarWhereWithAggregatesInput> = friendshipscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FriendshipScalarWhereWithAggregatesInput>;
export const FriendshipScalarWhereWithAggregatesInputObjectZodSchema = friendshipscalarwherewithaggregatesinputSchema;
