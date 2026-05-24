import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SolveUpdateOneRequiredWithoutSolve_viewsNestedInputObjectSchema as SolveUpdateOneRequiredWithoutSolve_viewsNestedInputObjectSchema } from './SolveUpdateOneRequiredWithoutSolve_viewsNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutSolve_viewsNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutSolve_viewsNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutSolve_viewsNestedInput.schema';
import { UserAccountUpdateOneWithoutViewed_solveNestedInputObjectSchema as UserAccountUpdateOneWithoutViewed_solveNestedInputObjectSchema } from './UserAccountUpdateOneWithoutViewed_solveNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  solve: z.lazy(() => SolveUpdateOneRequiredWithoutSolve_viewsNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutSolve_viewsNestedInputObjectSchema).optional(),
  viewer: z.lazy(() => UserAccountUpdateOneWithoutViewed_solveNestedInputObjectSchema).optional()
}).strict();
export const SolveViewUpdateInputObjectSchema: z.ZodType<Prisma.SolveViewUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpdateInput>;
export const SolveViewUpdateInputObjectZodSchema = makeSchema();
