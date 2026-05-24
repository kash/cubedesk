import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipRequestSelectObjectSchema as FriendshipRequestSelectObjectSchema } from './objects/FriendshipRequestSelect.schema';
import { FriendshipRequestUpdateManyMutationInputObjectSchema as FriendshipRequestUpdateManyMutationInputObjectSchema } from './objects/FriendshipRequestUpdateManyMutationInput.schema';
import { FriendshipRequestWhereInputObjectSchema as FriendshipRequestWhereInputObjectSchema } from './objects/FriendshipRequestWhereInput.schema';

export const FriendshipRequestUpdateManyAndReturnSchema: z.ZodType<Prisma.FriendshipRequestUpdateManyAndReturnArgs> = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), data: FriendshipRequestUpdateManyMutationInputObjectSchema, where: FriendshipRequestWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateManyAndReturnArgs>;

export const FriendshipRequestUpdateManyAndReturnZodSchema = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), data: FriendshipRequestUpdateManyMutationInputObjectSchema, where: FriendshipRequestWhereInputObjectSchema.optional() }).strict();