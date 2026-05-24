import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema'

const makeSchema = () => z.object({
  set: MetricLogTypeSchema.optional()
}).strict();
export const EnumMetricLogTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumMetricLogTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumMetricLogTypeFieldUpdateOperationsInput>;
export const EnumMetricLogTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
