import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FriendshipSelectObjectSchema as FriendshipSelectObjectSchema } from './objects/FriendshipSelect.schema';
import { FriendshipCreateManyInputObjectSchema as FriendshipCreateManyInputObjectSchema } from './objects/FriendshipCreateManyInput.schema';

export const FriendshipCreateManyAndReturnSchema: z.ZodType<Prisma.FriendshipCreateManyAndReturnArgs> = z.object({ select: FriendshipSelectObjectSchema.optional(), data: z.union([ FriendshipCreateManyInputObjectSchema, z.array(FriendshipCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FriendshipCreateManyAndReturnArgs>;

export const FriendshipCreateManyAndReturnZodSchema = z.object({ select: FriendshipSelectObjectSchema.optional(), data: z.union([ FriendshipCreateManyInputObjectSchema, z.array(FriendshipCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();