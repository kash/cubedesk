import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipRequestUpdateManyMutationInputObjectSchema as FriendshipRequestUpdateManyMutationInputObjectSchema } from './objects/FriendshipRequestUpdateManyMutationInput.schema';
import { FriendshipRequestWhereInputObjectSchema as FriendshipRequestWhereInputObjectSchema } from './objects/FriendshipRequestWhereInput.schema';

export const FriendshipRequestUpdateManySchema: z.ZodType<Prisma.FriendshipRequestUpdateManyArgs> = z.object({ data: FriendshipRequestUpdateManyMutationInputObjectSchema, where: FriendshipRequestWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipRequestUpdateManyArgs>;

export const FriendshipRequestUpdateManyZodSchema = z.object({ data: FriendshipRequestUpdateManyMutationInputObjectSchema, where: FriendshipRequestWhereInputObjectSchema.optional() }).strict();