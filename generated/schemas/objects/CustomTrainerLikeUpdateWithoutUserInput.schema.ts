import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInput.schema';
import { CustomTrainerUpdateOneRequiredWithoutLikesNestedInputObjectSchema as CustomTrainerUpdateOneRequiredWithoutLikesNestedInputObjectSchema } from './CustomTrainerUpdateOneRequiredWithoutLikesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  creator: z.lazy(() => UserAccountUpdateOneRequiredWithoutCustom_trainer_likesNestedInputObjectSchema).optional(),
  custom_trainer: z.lazy(() => CustomTrainerUpdateOneRequiredWithoutLikesNestedInputObjectSchema).optional()
}).strict();
export const CustomTrainerLikeUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateWithoutUserInput>;
export const CustomTrainerLikeUpdateWithoutUserInputObjectZodSchema = makeSchema();
