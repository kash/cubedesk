import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipRequestSelectObjectSchema as FriendshipRequestSelectObjectSchema } from './objects/FriendshipRequestSelect.schema';
import { FriendshipRequestIncludeObjectSchema as FriendshipRequestIncludeObjectSchema } from './objects/FriendshipRequestInclude.schema';
import { FriendshipRequestWhereUniqueInputObjectSchema as FriendshipRequestWhereUniqueInputObjectSchema } from './objects/FriendshipRequestWhereUniqueInput.schema';

export const FriendshipRequestDeleteOneSchema: z.ZodType<Prisma.FriendshipRequestDeleteArgs> = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), include: FriendshipRequestIncludeObjectSchema.optional(), where: FriendshipRequestWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FriendshipRequestDeleteArgs>;

export const FriendshipRequestDeleteOneZodSchema = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), include: FriendshipRequestIncludeObjectSchema.optional(), where: FriendshipRequestWhereUniqueInputObjectSchema }).strict();