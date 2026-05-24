import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const friendshipscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FriendshipScalarWhereInputObjectSchema), z.lazy(() => FriendshipScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FriendshipScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FriendshipScalarWhereInputObjectSchema), z.lazy(() => FriendshipScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  other_user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  friendship_request_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FriendshipScalarWhereInputObjectSchema: z.ZodType<Prisma.FriendshipScalarWhereInput> = friendshipscalarwhereinputSchema as unknown as z.ZodType<Prisma.FriendshipScalarWhereInput>;
export const FriendshipScalarWhereInputObjectZodSchema = friendshipscalarwhereinputSchema;
