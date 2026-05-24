import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  ip_address: z.string().optional().nullable(),
  ad_key: z.string(),
  view_time_seconds: z.number().int(),
  browser_session_id: z.string(),
  clicked_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional(),
  created_at: z.coerce.date().optional(),
  pathname: z.string(),
  last_session_started_at: z.coerce.date().optional()
}).strict();
export const AdViewCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AdViewCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewCreateWithoutUserInput>;
export const AdViewCreateWithoutUserInputObjectZodSchema = makeSchema();
