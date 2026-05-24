import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipSelectObjectSchema as FriendshipSelectObjectSchema } from './objects/FriendshipSelect.schema';
import { FriendshipUpdateManyMutationInputObjectSchema as FriendshipUpdateManyMutationInputObjectSchema } from './objects/FriendshipUpdateManyMutationInput.schema';
import { FriendshipWhereInputObjectSchema as FriendshipWhereInputObjectSchema } from './objects/FriendshipWhereInput.schema';

export const FriendshipUpdateManyAndReturnSchema: z.ZodType<Prisma.FriendshipUpdateManyAndReturnArgs> = z.object({ select: FriendshipSelectObjectSchema.optional(), data: FriendshipUpdateManyMutationInputObjectSchema, where: FriendshipWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipUpdateManyAndReturnArgs>;

export const FriendshipUpdateManyAndReturnZodSchema = z.object({ select: FriendshipSelectObjectSchema.optional(), data: FriendshipUpdateManyMutationInputObjectSchema, where: FriendshipWhereInputObjectSchema.optional() }).strict();