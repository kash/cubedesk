import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BadgeTypeUpdateOneRequiredWithoutBadgesNestedInputObjectSchema as BadgeTypeUpdateOneRequiredWithoutBadgesNestedInputObjectSchema } from './BadgeTypeUpdateOneRequiredWithoutBadgesNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutBadgesNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutBadgesNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutBadgesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  badge_type: z.lazy(() => BadgeTypeUpdateOneRequiredWithoutBadgesNestedInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutBadgesNestedInputObjectSchema).optional()
}).strict();
export const BadgeUpdateInputObjectSchema: z.ZodType<Prisma.BadgeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUpdateInput>;
export const BadgeUpdateInputObjectZodSchema = makeSchema();
