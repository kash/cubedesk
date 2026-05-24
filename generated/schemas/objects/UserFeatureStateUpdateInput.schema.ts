import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutUser_feature_stateNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutUser_feature_stateNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutUser_feature_stateNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  received_welcome_screen: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutUser_feature_stateNestedInputObjectSchema).optional()
}).strict();
export const UserFeatureStateUpdateInputObjectSchema: z.ZodType<Prisma.UserFeatureStateUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateUpdateInput>;
export const UserFeatureStateUpdateInputObjectZodSchema = makeSchema();
