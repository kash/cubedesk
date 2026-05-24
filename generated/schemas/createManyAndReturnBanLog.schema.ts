import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { BanLogSelectObjectSchema as BanLogSelectObjectSchema } from './objects/BanLogSelect.schema';
import { BanLogCreateManyInputObjectSchema as BanLogCreateManyInputObjectSchema } from './objects/BanLogCreateManyInput.schema';

export const BanLogCreateManyAndReturnSchema: z.ZodType<Prisma.BanLogCreateManyAndReturnArgs> = z.object({ select: BanLogSelectObjectSchema.optional(), data: z.union([ BanLogCreateManyInputObjectSchema, z.array(BanLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.BanLogCreateManyAndReturnArgs>;

export const BanLogCreateManyAndReturnZodSchema = z.object({ select: BanLogSelectObjectSchema.optional(), data: z.union([ BanLogCreateManyInputObjectSchema, z.array(BanLogCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();