import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutReports_createdNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutReports_createdNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutReports_createdNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutReports_forNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutReports_forNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutReports_forNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  reason: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  resolved_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_by: z.lazy(() => UserAccountUpdateOneRequiredWithoutReports_createdNestedInputObjectSchema).optional(),
  reported_user: z.lazy(() => UserAccountUpdateOneRequiredWithoutReports_forNestedInputObjectSchema).optional()
}).strict();
export const ReportUpdateInputObjectSchema: z.ZodType<Prisma.ReportUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateInput>;
export const ReportUpdateInputObjectZodSchema = makeSchema();
