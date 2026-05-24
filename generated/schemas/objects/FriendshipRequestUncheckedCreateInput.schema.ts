import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipUncheckedCreateNestedManyWithoutFriendship_requestInputObjectSchema as FriendshipUncheckedCreateNestedManyWithoutFriendship_requestInputObjectSchema } from './FriendshipUncheckedCreateNestedManyWithoutFriendship_requestInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  from_id: z.string(),
  to_id: z.string(),
  created_at: z.coerce.date().optional(),
  accepted_at: z.coerce.date().optional().nullable(),
  friendship: z.lazy(() => FriendshipUncheckedCreateNestedManyWithoutFriendship_requestInputObjectSchema).optional()
}).strict();
export const FriendshipRequestUncheckedCreateInputObjectSchema: z.ZodType<Prisma.FriendshipRequestUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestUncheckedCreateInput>;
export const FriendshipRequestUncheckedCreateInputObjectZodSchema = makeSchema();
