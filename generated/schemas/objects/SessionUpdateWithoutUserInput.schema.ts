import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SolveUpdateManyWithoutSessionNestedInputObjectSchema as SolveUpdateManyWithoutSessionNestedInputObjectSchema } from './SolveUpdateManyWithoutSessionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  solves: z.lazy(() => SolveUpdateManyWithoutSessionNestedInputObjectSchema).optional()
}).strict();
export const SessionUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateWithoutUserInput>;
export const SessionUpdateWithoutUserInputObjectZodSchema = makeSchema();
