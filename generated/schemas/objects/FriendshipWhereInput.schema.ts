import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FriendshipRequestScalarRelationFilterObjectSchema as FriendshipRequestScalarRelationFilterObjectSchema } from './FriendshipRequestScalarRelationFilter.schema';
import { FriendshipRequestWhereInputObjectSchema as FriendshipRequestWhereInputObjectSchema } from './FriendshipRequestWhereInput.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const friendshipwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FriendshipWhereInputObjectSchema), z.lazy(() => FriendshipWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FriendshipWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FriendshipWhereInputObjectSchema), z.lazy(() => FriendshipWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  other_user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  friendship_request_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  friendship_request: z.union([z.lazy(() => FriendshipRequestScalarRelationFilterObjectSchema), z.lazy(() => FriendshipRequestWhereInputObjectSchema)]).optional(),
  other_user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const FriendshipWhereInputObjectSchema: z.ZodType<Prisma.FriendshipWhereInput> = friendshipwhereinputSchema as unknown as z.ZodType<Prisma.FriendshipWhereInput>;
export const FriendshipWhereInputObjectZodSchema = friendshipwhereinputSchema;
