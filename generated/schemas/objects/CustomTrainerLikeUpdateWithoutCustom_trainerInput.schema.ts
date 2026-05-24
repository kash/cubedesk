import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  creator: z.lazy(() => UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutLiked_custom_trainersNestedInputObjectSchema).optional()
}).strict();
export const CustomTrainerLikeUpdateWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpdateWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateWithoutCustom_trainerInput>;
export const CustomTrainerLikeUpdateWithoutCustom_trainerInputObjectZodSchema = makeSchema();
