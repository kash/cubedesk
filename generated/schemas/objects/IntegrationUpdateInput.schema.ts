import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BigIntFieldUpdateOperationsInputObjectSchema as BigIntFieldUpdateOperationsInputObjectSchema } from './BigIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutIntegrationsNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutIntegrationsNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutIntegrationsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  service_name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  auth_token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  refresh_token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  auth_expires_at: z.union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserAccountUpdateOneRequiredWithoutIntegrationsNestedInputObjectSchema).optional()
}).strict();
export const IntegrationUpdateInputObjectSchema: z.ZodType<Prisma.IntegrationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationUpdateInput>;
export const IntegrationUpdateInputObjectZodSchema = makeSchema();
