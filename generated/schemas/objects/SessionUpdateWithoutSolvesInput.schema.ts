import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutSessionsNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutSessionsNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutSessionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutSessionsNestedInputObjectSchema).optional()
}).strict();
export const SessionUpdateWithoutSolvesInputObjectSchema: z.ZodType<Prisma.SessionUpdateWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateWithoutSolvesInput>;
export const SessionUpdateWithoutSolvesInputObjectZodSchema = makeSchema();
