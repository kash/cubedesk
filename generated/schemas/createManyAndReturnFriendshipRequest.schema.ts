import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipRequestSelectObjectSchema as FriendshipRequestSelectObjectSchema } from './objects/FriendshipRequestSelect.schema';
import { FriendshipRequestCreateManyInputObjectSchema as FriendshipRequestCreateManyInputObjectSchema } from './objects/FriendshipRequestCreateManyInput.schema';

export const FriendshipRequestCreateManyAndReturnSchema: z.ZodType<Prisma.FriendshipRequestCreateManyAndReturnArgs> = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), data: z.union([ FriendshipRequestCreateManyInputObjectSchema, z.array(FriendshipRequestCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipRequestCreateManyAndReturnArgs>;

export const FriendshipRequestCreateManyAndReturnZodSchema = z.object({ select: FriendshipRequestSelectObjectSchema.optional(), data: z.union([ FriendshipRequestCreateManyInputObjectSchema, z.array(FriendshipRequestCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();