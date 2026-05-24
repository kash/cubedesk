import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipRequestWhereInputObjectSchema as FriendshipRequestWhereInputObjectSchema } from './objects/FriendshipRequestWhereInput.schema';

export const FriendshipRequestDeleteManySchema: z.ZodType<Prisma.FriendshipRequestDeleteManyArgs> = z.object({ where: FriendshipRequestWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipRequestDeleteManyArgs>;

export const FriendshipRequestDeleteManyZodSchema = z.object({ where: FriendshipRequestWhereInputObjectSchema.optional() }).strict();