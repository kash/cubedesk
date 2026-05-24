import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutForgot_passwordNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutForgot_passwordNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutForgot_passwordNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  claimed: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutForgot_passwordNestedInputObjectSchema).optional()
}).strict();
export const ForgotPasswordUpdateInputObjectSchema: z.ZodType<Prisma.ForgotPasswordUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordUpdateInput>;
export const ForgotPasswordUpdateInputObjectZodSchema = makeSchema();
