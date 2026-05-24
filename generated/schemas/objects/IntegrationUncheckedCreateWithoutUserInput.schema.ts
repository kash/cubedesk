import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  service_name: z.string(),
  auth_token: z.string(),
  refresh_token: z.string(),
  auth_expires_at: z.bigint(),
  created_at: z.coerce.date().optional()
}).strict();
export const IntegrationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.IntegrationUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationUncheckedCreateWithoutUserInput>;
export const IntegrationUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
