import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  service_name: z.string(),
  auth_token: z.string(),
  refresh_token: z.string(),
  auth_expires_at: z.bigint(),
  created_at: z.coerce.date().optional()
}).strict();
export const IntegrationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.IntegrationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationUncheckedCreateInput>;
export const IntegrationUncheckedCreateInputObjectZodSchema = makeSchema();
