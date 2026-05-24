import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutBadgesNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutBadgesNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutBadgesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutBadgesNestedInputObjectSchema).optional()
}).strict();
export const BadgeUpdateWithoutBadge_typeInputObjectSchema: z.ZodType<Prisma.BadgeUpdateWithoutBadge_typeInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeUpdateWithoutBadge_typeInput>;
export const BadgeUpdateWithoutBadge_typeInputObjectZodSchema = makeSchema();
