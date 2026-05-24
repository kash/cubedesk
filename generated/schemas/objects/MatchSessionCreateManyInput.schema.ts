import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  min_players: z.number().int().optional(),
  max_players: z.number().int().optional(),
  match_type: z.string(),
  custom_match: z.boolean().optional(),
  created_at: z.coerce.date().optional(),
  created_by_id: z.string().optional().nullable(),
  rated: z.boolean().optional().nullable()
}).strict();
export const MatchSessionCreateManyInputObjectSchema: z.ZodType<Prisma.MatchSessionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCreateManyInput>;
export const MatchSessionCreateManyInputObjectZodSchema = makeSchema();
