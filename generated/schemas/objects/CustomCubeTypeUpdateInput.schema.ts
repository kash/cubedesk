import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { SettingUpdateOneRequiredWithoutCustom_cube_typesNestedInputObjectSchema as SettingUpdateOneRequiredWithoutCustom_cube_typesNestedInputObjectSchema } from './SettingUpdateOneRequiredWithoutCustom_cube_typesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  scramble: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  private: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  setting: z.lazy(() => SettingUpdateOneRequiredWithoutCustom_cube_typesNestedInputObjectSchema).optional()
}).strict();
export const CustomCubeTypeUpdateInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeUpdateInput>;
export const CustomCubeTypeUpdateInputObjectZodSchema = makeSchema();
