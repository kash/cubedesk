import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BadgeUncheckedUpdateManyWithoutBadge_typeNestedInputObjectSchema as BadgeUncheckedUpdateManyWithoutBadge_typeNestedInputObjectSchema } from './BadgeUncheckedUpdateManyWithoutBadge_typeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  priority: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  color: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  badges: z.lazy(() => BadgeUncheckedUpdateManyWithoutBadge_typeNestedInputObjectSchema).optional()
}).strict();
export const BadgeTypeUncheckedUpdateWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.BadgeTypeUncheckedUpdateWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeUncheckedUpdateWithoutCreated_byInput>;
export const BadgeTypeUncheckedUpdateWithoutCreated_byInputObjectZodSchema = makeSchema();
