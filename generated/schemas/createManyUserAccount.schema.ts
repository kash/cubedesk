import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { UserAccountCreateManyInputObjectSchema as UserAccountCreateManyInputObjectSchema } from './objects/UserAccountCreateManyInput.schema';

export const UserAccountCreateManySchema: z.ZodType<Prisma.UserAccountCreateManyArgs> = z.object({ data: z.union([ UserAccountCreateManyInputObjectSchema, z.array(UserAccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserAccountCreateManyArgs>;

export const UserAccountCreateManyZodSchema = z.object({ data: z.union([ UserAccountCreateManyInputObjectSchema, z.array(UserAccountCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();