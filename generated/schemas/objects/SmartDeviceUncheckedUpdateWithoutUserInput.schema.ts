import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SolveUncheckedUpdateManyWithoutSmart_deviceNestedInputObjectSchema as SolveUncheckedUpdateManyWithoutSmart_deviceNestedInputObjectSchema } from './SolveUncheckedUpdateManyWithoutSmart_deviceNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  internal_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  device_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  solves: z.lazy(() => SolveUncheckedUpdateManyWithoutSmart_deviceNestedInputObjectSchema).optional()
}).strict();
export const SmartDeviceUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.SmartDeviceUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceUncheckedUpdateWithoutUserInput>;
export const SmartDeviceUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
