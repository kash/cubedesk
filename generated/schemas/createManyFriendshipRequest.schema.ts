import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipRequestCreateManyInputObjectSchema as FriendshipRequestCreateManyInputObjectSchema } from './objects/FriendshipRequestCreateManyInput.schema';

export const FriendshipRequestCreateManySchema: z.ZodType<Prisma.FriendshipRequestCreateManyArgs> = z.object({ data: z.union([ FriendshipRequestCreateManyInputObjectSchema, z.array(FriendshipRequestCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipRequestCreateManyArgs>;

export const FriendshipRequestCreateManyZodSchema = z.object({ data: z.union([ FriendshipRequestCreateManyInputObjectSchema, z.array(FriendshipRequestCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();