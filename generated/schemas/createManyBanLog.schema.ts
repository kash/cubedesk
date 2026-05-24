import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogCreateManyInputObjectSchema as BanLogCreateManyInputObjectSchema } from './objects/BanLogCreateManyInput.schema';

export const BanLogCreateManySchema: z.ZodType<Prisma.BanLogCreateManyArgs> = z.object({ data: z.union([ BanLogCreateManyInputObjectSchema, z.array(BanLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BanLogCreateManyArgs>;

export const BanLogCreateManyZodSchema = z.object({ data: z.union([ BanLogCreateManyInputObjectSchema, z.array(BanLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();