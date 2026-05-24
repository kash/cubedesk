import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipUpdateManyMutationInputObjectSchema as FriendshipUpdateManyMutationInputObjectSchema } from './objects/FriendshipUpdateManyMutationInput.schema';
import { FriendshipWhereInputObjectSchema as FriendshipWhereInputObjectSchema } from './objects/FriendshipWhereInput.schema';

export const FriendshipUpdateManySchema: z.ZodType<Prisma.FriendshipUpdateManyArgs> = z.object({ data: FriendshipUpdateManyMutationInputObjectSchema, where: FriendshipWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipUpdateManyArgs>;

export const FriendshipUpdateManyZodSchema = z.object({ data: FriendshipUpdateManyMutationInputObjectSchema, where: FriendshipWhereInputObjectSchema.optional() }).strict();