import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SolveUncheckedUpdateManyWithoutSessionNestedInputObjectSchema as SolveUncheckedUpdateManyWithoutSessionNestedInputObjectSchema } from './SolveUncheckedUpdateManyWithoutSessionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  solves: z.lazy(() => SolveUncheckedUpdateManyWithoutSessionNestedInputObjectSchema).optional()
}).strict();
export const SessionUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedUpdateInput>;
export const SessionUncheckedUpdateInputObjectZodSchema = makeSchema();
