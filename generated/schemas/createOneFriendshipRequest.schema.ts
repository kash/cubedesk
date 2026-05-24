import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipRequestSelectObjectSchema as FriendshipRequestSelectObjectSchema } from './objects/FriendshipRequestSelect.schema';
import { FriendshipRequestIncludeObjectSchema as FriendshipRequestIncludeObjectSchema } from './objects/FriendshipRequestInclude.schema';
import { FriendshipRequestCreateInputObjectSchema as FriendshipRequestCreateInputObjectSchema } from './objects/FriendshipRequestCreateInput.schema';
import { FriendshipRequestUncheckedCreateInputObjectSchema as FriendshipRequestUncheckedCreateInputObjectSchema } from './objects/FriendshipRequestUncheckedCreateInput.schema';

export const FriendshipRequestCreateOneSchema: z.ZodType<Prisma.FriendshipRequestCreateArgs> = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), include: FriendshipRequestIncludeObjectSchema.optional(), data: z.union([FriendshipRequestCreateInputObjectSchema, FriendshipRequestUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FriendshipRequestCreateArgs>;

export const FriendshipRequestCreateOneZodSchema = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), include: FriendshipRequestIncludeObjectSchema.optional(), data: z.union([FriendshipRequestCreateInputObjectSchema, FriendshipRequestUncheckedCreateInputObjectSchema]) }).strict();