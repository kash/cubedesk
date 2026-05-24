import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ReportSelectObjectSchema as ReportSelectObjectSchema } from './objects/ReportSelect.schema';
import { ReportUpdateManyMutationInputObjectSchema as ReportUpdateManyMutationInputObjectSchema } from './objects/ReportUpdateManyMutationInput.schema';
import { ReportWhereInputObjectSchema as ReportWhereInputObjectSchema } from './objects/ReportWhereInput.schema';

export const ReportUpdateManyAndReturnSchema: z.ZodType<Prisma.ReportUpdateManyAndReturnArgs> = z.object({ select: ReportSelectObjectSchema.optional(), data: ReportUpdateManyMutationInputObjectSchema, where: ReportWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReportUpdateManyAndReturnArgs>;

export const ReportUpdateManyAndReturnZodSchema = z.object({ select: ReportSelectObjectSchema.optional(), data: ReportUpdateManyMutationInputObjectSchema, where: ReportWhereInputObjectSchema.optional() }).strict();