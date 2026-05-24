import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserAccountSelectObjectSchema as UserAccountSelectObjectSchema } from './objects/UserAccountSelect.schema';
import { UserAccountCreateManyInputObjectSchema as UserAccountCreateManyInputObjectSchema } from './objects/UserAccountCreateManyInput.schema';

export const UserAccountCreateManyAndReturnSchema: z.ZodType<Prisma.UserAccountCreateManyAndReturnArgs> = z.object({ select: UserAccountSelectObjectSchema.optional(), data: z.union([ UserAccountCreateManyInputObjectSchema, z.array(UserAccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserAccountCreateManyAndReturnArgs>;

export const UserAccountCreateManyAndReturnZodSchema = z.object({ select: UserAccountSelectObjectSchema.optional(), data: z.union([ UserAccountCreateManyInputObjectSchema, z.array(UserAccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();