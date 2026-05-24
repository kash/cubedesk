import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutIntegrationsInputObjectSchema as UserAccountCreateNestedOneWithoutIntegrationsInputObjectSchema } from './UserAccountCreateNestedOneWithoutIntegrationsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  service_name: z.string(),
  auth_token: z.string(),
  refresh_token: z.string(),
  auth_expires_at: z.bigint(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutIntegrationsInputObjectSchema)
}).strict();
export const IntegrationCreateInputObjectSchema: z.ZodType<Prisma.IntegrationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationCreateInput>;
export const IntegrationCreateInputObjectZodSchema = makeSchema();
