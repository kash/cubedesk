import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  match_id: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date().optional(),
  resigned: z.boolean().optional(),
  forfeited: z.boolean().optional(),
  position: z.number().int().optional(),
  won: z.boolean().optional(),
  lost: z.boolean().optional(),
  abandoned: z.boolean().optional(),
  aborted: z.boolean().optional()
}).strict();
export const MatchParticipantCreateManyInputObjectSchema: z.ZodType<Prisma.MatchParticipantCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantCreateManyInput>;
export const MatchParticipantCreateManyInputObjectZodSchema = makeSchema();
