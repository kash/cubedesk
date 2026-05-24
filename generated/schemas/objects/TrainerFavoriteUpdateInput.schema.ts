import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutTrainer_favoriteNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutTrainer_favoriteNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutTrainer_favoriteNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  cube_key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutTrainer_favoriteNestedInputObjectSchema).optional()
}).strict();
export const TrainerFavoriteUpdateInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteUpdateInput>;
export const TrainerFavoriteUpdateInputObjectZodSchema = makeSchema();
