import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema';
import { EnumMetricLogTypeFieldUpdateOperationsInputObjectSchema as EnumMetricLogTypeFieldUpdateOperationsInputObjectSchema } from './EnumMetricLogTypeFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneWithoutMetric_logsNestedInputObjectSchema as UserAccountUpdateOneWithoutMetric_logsNestedInputObjectSchema } from './UserAccountUpdateOneWithoutMetric_logsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  metric_type: z.union([MetricLogTypeSchema, z.lazy(() => EnumMetricLogTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  metric_value: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  metric_details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserAccountUpdateOneWithoutMetric_logsNestedInputObjectSchema).optional()
}).strict();
export const MetricLogUpdateInputObjectSchema: z.ZodType<Prisma.MetricLogUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogUpdateInput>;
export const MetricLogUpdateInputObjectZodSchema = makeSchema();
