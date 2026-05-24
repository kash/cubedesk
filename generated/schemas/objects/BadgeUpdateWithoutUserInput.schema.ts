import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BadgeTypeUpdateOneRequiredWithoutBadgesNestedInputObjectSchema as BadgeTypeUpdateOneRequiredWithoutBadgesNestedInputObjectSchema } from './BadgeTypeUpdateOneRequiredWithoutBadgesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  badge_type: z.lazy(() => BadgeTypeUpdateOneRequiredWithoutBadgesNestedInputObjectSchema).optional()
}).strict();
export const BadgeUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.BadgeUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUpdateWithoutUserInput>;
export const BadgeUpdateWithoutUserInputObjectZodSchema = makeSchema();
