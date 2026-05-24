import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FriendshipListRelationFilterObjectSchema as FriendshipListRelationFilterObjectSchema } from './FriendshipListRelationFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const friendshiprequestwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FriendshipRequestWhereInputObjectSchema), z.lazy(() => FriendshipRequestWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FriendshipRequestWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FriendshipRequestWhereInputObjectSchema), z.lazy(() => FriendshipRequestWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  from_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  to_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  accepted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  friendship: z.lazy(() => FriendshipListRelationFilterObjectSchema).optional(),
  from_user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  to_user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const FriendshipRequestWhereInputObjectSchema: z.ZodType<Prisma.FriendshipRequestWhereInput> = friendshiprequestwhereinputSchema as unknown as z.ZodType<Prisma.FriendshipRequestWhereInput>;
export const FriendshipRequestWhereInputObjectZodSchema = friendshiprequestwhereinputSchema;
