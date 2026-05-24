import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const friendshiprequestscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FriendshipRequestScalarWhereInputObjectSchema), z.lazy(() => FriendshipRequestScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FriendshipRequestScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FriendshipRequestScalarWhereInputObjectSchema), z.lazy(() => FriendshipRequestScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  from_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  to_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  accepted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const FriendshipRequestScalarWhereInputObjectSchema: z.ZodType<Prisma.FriendshipRequestScalarWhereInput> = friendshiprequestscalarwhereinputSchema as unknown as z.ZodType<Prisma.FriendshipRequestScalarWhereInput>;
export const FriendshipRequestScalarWhereInputObjectZodSchema = friendshiprequestscalarwhereinputSchema;
