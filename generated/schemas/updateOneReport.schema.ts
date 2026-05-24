import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportSelectObjectSchema as ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportIncludeObjectSchema as ReportIncludeObjectSchema } from './objects/ReportInclude.schema';
import { ReportUpdateInputObjectSchema as ReportUpdateInputObjectSchema } from './objects/ReportUpdateInput.schema';
import { ReportUncheckedUpdateInputObjectSchema as ReportUncheckedUpdateInputObjectSchema } from './objects/ReportUncheckedUpdateInput.schema';
import { ReportWhereUniqueInputObjectSchema as ReportWhereUniqueInputObjectSchema } from './objects/ReportWhereUniqueInput.schema';

export const ReportUpdateOneSchema: z.ZodType<Prisma.ReportUpdateArgs> = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), data: z.union([ReportUpdateInputObjectSchema, ReportUncheckedUpdateInputObjectSchema]), where: ReportWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReportUpdateArgs>;

export const ReportUpdateOneZodSchema = z.object({ select: ReportSelectObjectSchema.optional(), include: ReportIncludeObjectSchema.optional(), data: z.union([ReportUpdateInputObjectSchema, ReportUncheckedUpdateInputObjectSchema]), where: ReportWhereUniqueInputObjectSchema }).strict();