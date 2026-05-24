import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  custom_trainer_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  creator_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CustomTrainerLikeUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUncheckedUpdateWithoutUserInput>;
export const CustomTrainerLikeUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
