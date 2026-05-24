import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportUpdateManyMutationInputObjectSchema as ReportUpdateManyMutationInputObjectSchema } from './objects/ReportUpdateManyMutationInput.schema';
import { ReportWhereInputObjectSchema as ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';

export const ReportUpdateManySchema: z.ZodType<Prisma.ReportUpdateManyArgs> = z.object({ data: ReportUpdateManyMutationInputObjectSchema, where: ReportWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportUpdateManyArgs>;

export const ReportUpdateManyZodSchema = z.object({ data: ReportUpdateManyMutationInputObjectSchema, where: ReportWhereInputObjectSchema.optional() }).strict();