import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SolveUpdateOneRequiredWithoutTop_average_1NestedInputObjectSchema as SolveUpdateOneRequiredWithoutTop_average_1NestedInputObjectSchema } from './SolveUpdateOneRequiredWithoutTop_average_1NestedInput.schema';
import { SolveUpdateOneRequiredWithoutTop_average_2NestedInputObjectSchema as SolveUpdateOneRequiredWithoutTop_average_2NestedInputObjectSchema } from './SolveUpdateOneRequiredWithoutTop_average_2NestedInput.schema';
import { SolveUpdateOneRequiredWithoutTop_average_3NestedInputObjectSchema as SolveUpdateOneRequiredWithoutTop_average_3NestedInputObjectSchema } from './SolveUpdateOneRequiredWithoutTop_average_3NestedInput.schema';
import { SolveUpdateOneRequiredWithoutTop_average_5NestedInputObjectSchema as SolveUpdateOneRequiredWithoutTop_average_5NestedInputObjectSchema } from './SolveUpdateOneRequiredWithoutTop_average_5NestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutTop_averageNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutTop_averageNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutTop_averageNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  time: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  cube_type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  solve_1: z.lazy(() => SolveUpdateOneRequiredWithoutTop_average_1NestedInputObjectSchema).optional(),
  solve_2: z.lazy(() => SolveUpdateOneRequiredWithoutTop_average_2NestedInputObjectSchema).optional(),
  solve_3: z.lazy(() => SolveUpdateOneRequiredWithoutTop_average_3NestedInputObjectSchema).optional(),
  solve_5: z.lazy(() => SolveUpdateOneRequiredWithoutTop_average_5NestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutTop_averageNestedInputObjectSchema).optional()
}).strict();
export const TopAverageUpdateWithoutSolve_4InputObjectSchema: z.ZodType<Prisma.TopAverageUpdateWithoutSolve_4Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateWithoutSolve_4Input>;
export const TopAverageUpdateWithoutSolve_4InputObjectZodSchema = makeSchema();
