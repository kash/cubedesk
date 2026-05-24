import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { CustomTrainerUpdateOneRequiredWithoutLikesNestedInputObjectSchema as CustomTrainerUpdateOneRequiredWithoutLikesNestedInputObjectSchema } from './CustomTrainerUpdateOneRequiredWithoutLikesNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  custom_trainer: z.lazy(() => CustomTrainerUpdateOneRequiredWithoutLikesNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInputObjectSchema).optional()
}).strict();
export const CustomTrainerLikeUpdateWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpdateWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateWithoutCreatorInput>;
export const CustomTrainerLikeUpdateWithoutCreatorInputObjectZodSchema = makeSchema();
