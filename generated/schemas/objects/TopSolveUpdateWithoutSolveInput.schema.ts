import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutTop_solvesNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutTop_solvesNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutTop_solvesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  time: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  cube_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutTop_solvesNestedInputObjectSchema).optional()
}).strict();
export const TopSolveUpdateWithoutSolveInputObjectSchema: z.ZodType<Prisma.TopSolveUpdateWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUpdateWithoutSolveInput>;
export const TopSolveUpdateWithoutSolveInputObjectZodSchema = makeSchema();
