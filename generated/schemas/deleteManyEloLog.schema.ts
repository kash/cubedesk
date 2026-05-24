import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { EloLogWhereInputObjectSchema as EloLogWhereInputObjectSchema } from './objects/EloLogWhereInput.schema';

export const EloLogDeleteManySchema: z.ZodType<Prisma.EloLogDeleteManyArgs> = z.object({ where: EloLogWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EloLogDeleteManyArgs>;

export const EloLogDeleteManyZodSchema = z.object({ where: EloLogWhereInputObjectSchema.optional() }).strict();