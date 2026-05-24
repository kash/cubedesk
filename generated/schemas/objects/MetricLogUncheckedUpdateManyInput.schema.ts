import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema';
import { EnumMetricLogTypeFieldUpdateOperationsInputObjectSchema as EnumMetricLogTypeFieldUpdateOperationsInputObjectSchema } from './EnumMetricLogTypeFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  metric_type: z.union([MetricLogTypeSchema, z.lazy(() => EnumMetricLogTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  metric_value: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  metric_details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const MetricLogUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.MetricLogUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogUncheckedUpdateManyInput>;
export const MetricLogUncheckedUpdateManyInputObjectZodSchema = makeSchema();
