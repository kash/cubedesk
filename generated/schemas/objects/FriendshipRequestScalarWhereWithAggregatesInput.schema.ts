import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const friendshiprequestscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FriendshipRequestScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FriendshipRequestScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FriendshipRequestScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FriendshipRequestScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FriendshipRequestScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  from_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  to_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  accepted_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const FriendshipRequestScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FriendshipRequestScalarWhereWithAggregatesInput> = friendshiprequestscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FriendshipRequestScalarWhereWithAggregatesInput>;
export const FriendshipRequestScalarWhereWithAggregatesInputObjectZodSchema = friendshiprequestscalarwherewithaggregatesinputSchema;
