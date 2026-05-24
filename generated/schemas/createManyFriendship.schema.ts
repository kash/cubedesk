import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipCreateManyInputObjectSchema as FriendshipCreateManyInputObjectSchema } from './objects/FriendshipCreateManyInput.schema';

export const FriendshipCreateManySchema: z.ZodType<Prisma.FriendshipCreateManyArgs> = z.object({ data: z.union([ FriendshipCreateManyInputObjectSchema, z.array(FriendshipCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipCreateManyArgs>;

export const FriendshipCreateManyZodSchema = z.object({ data: z.union([ FriendshipCreateManyInputObjectSchema, z.array(FriendshipCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();