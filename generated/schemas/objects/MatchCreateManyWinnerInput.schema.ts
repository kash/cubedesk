import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  link_code: z.string(),
  match_session_id: z.string(),
  ended_at: z.coerce.date().optional().nullable(),
  started_at: z.coerce.date().optional().nullable(),
  spectate_code: z.string().optional().nullable(),
  aborted: z.boolean().optional()
}).strict();
export const MatchCreateManyWinnerInputObjectSchema: z.ZodType<Prisma.MatchCreateManyWinnerInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchCreateManyWinnerInput>;
export const MatchCreateManyWinnerInputObjectZodSchema = makeSchema();
