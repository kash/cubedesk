import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportWhereInputObjectSchema as ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';

export const ReportDeleteManySchema: z.ZodType<Prisma.ReportDeleteManyArgs> = z.object({ where: ReportWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportDeleteManyArgs>;

export const ReportDeleteManyZodSchema = z.object({ where: ReportWhereInputObjectSchema.optional() }).strict();