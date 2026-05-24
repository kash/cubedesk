import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutSmart_deviceNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutSmart_deviceNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutSmart_deviceNestedInput.schema';
import { SolveUpdateManyWithoutSmart_deviceNestedInputObjectSchema as SolveUpdateManyWithoutSmart_deviceNestedInputObjectSchema } from './SolveUpdateManyWithoutSmart_deviceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  internal_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutSmart_deviceNestedInputObjectSchema).optional(),
  solves: z.lazy(() => SolveUpdateManyWithoutSmart_deviceNestedInputObjectSchema).optional()
}).strict();
export const SmartDeviceUpdateInputObjectSchema: z.ZodType<Prisma.SmartDeviceUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceUpdateInput>;
export const SmartDeviceUpdateInputObjectZodSchema = makeSchema();
