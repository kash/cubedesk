import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipWhereInputObjectSchema as FriendshipWhereInputObjectSchema } from './objects/FriendshipWhereInput.schema';

export const FriendshipDeleteManySchema: z.ZodType<Prisma.FriendshipDeleteManyArgs> = z.object({ where: FriendshipWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipDeleteManyArgs>;

export const FriendshipDeleteManyZodSchema = z.object({ where: FriendshipWhereInputObjectSchema.optional() }).strict();