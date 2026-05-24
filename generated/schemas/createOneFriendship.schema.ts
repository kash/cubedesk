import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipSelectObjectSchema as FriendshipSelectObjectSchema } from './objects/FriendshipSelect.schema';
import { FriendshipIncludeObjectSchema as FriendshipIncludeObjectSchema } from './objects/FriendshipInclude.schema';
import { FriendshipCreateInputObjectSchema as FriendshipCreateInputObjectSchema } from './objects/FriendshipCreateInput.schema';
import { FriendshipUncheckedCreateInputObjectSchema as FriendshipUncheckedCreateInputObjectSchema } from './objects/FriendshipUncheckedCreateInput.schema';

export const FriendshipCreateOneSchema: z.ZodType<Prisma.FriendshipCreateArgs> = z.object({ select: FriendshipSelectObjectSchema.optional(), include: FriendshipIncludeObjectSchema.optional(), data: z.union([FriendshipCreateInputObjectSchema, FriendshipUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FriendshipCreateArgs>;

export const FriendshipCreateOneZodSchema = z.object({ select: FriendshipSelectObjectSchema.optional(), include: FriendshipIncludeObjectSchema.optional(), data: z.union([FriendshipCreateInputObjectSchema, FriendshipUncheckedCreateInputObjectSchema]) }).strict();