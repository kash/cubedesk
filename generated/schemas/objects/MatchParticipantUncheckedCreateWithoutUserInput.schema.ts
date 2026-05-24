import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveUncheckedCreateNestedManyWithoutMatch_participantInputObjectSchema as SolveUncheckedCreateNestedManyWithoutMatch_participantInputObjectSchema } from './SolveUncheckedCreateNestedManyWithoutMatch_participantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  match_id: z.string(),
  created_at: z.coerce.date().optional(),
  resigned: z.boolean().optional(),
  forfeited: z.boolean().optional(),
  position: z.number().int().optional(),
  won: z.boolean().optional(),
  lost: z.boolean().optional(),
  abandoned: z.boolean().optional(),
  aborted: z.boolean().optional(),
  solves: z.lazy(() => SolveUncheckedCreateNestedManyWithoutMatch_participantInputObjectSchema).optional()
}).strict();
export const MatchParticipantUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchParticipantUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantUncheckedCreateWithoutUserInput>;
export const MatchParticipantUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
