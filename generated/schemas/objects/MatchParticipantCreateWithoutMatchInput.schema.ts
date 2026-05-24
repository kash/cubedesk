import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutMatch_participationsInputObjectSchema as UserAccountCreateNestedOneWithoutMatch_participationsInputObjectSchema } from './UserAccountCreateNestedOneWithoutMatch_participationsInput.schema';
import { SolveCreateNestedManyWithoutMatch_participantInputObjectSchema as SolveCreateNestedManyWithoutMatch_participantInputObjectSchema } from './SolveCreateNestedManyWithoutMatch_participantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  resigned: z.boolean().optional(),
  forfeited: z.boolean().optional(),
  position: z.number().int().optional(),
  won: z.boolean().optional(),
  lost: z.boolean().optional(),
  abandoned: z.boolean().optional(),
  aborted: z.boolean().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutMatch_participationsInputObjectSchema),
  solves: z.lazy(() => SolveCreateNestedManyWithoutMatch_participantInputObjectSchema).optional()
}).strict();
export const MatchParticipantCreateWithoutMatchInputObjectSchema: z.ZodType<Prisma.MatchParticipantCreateWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantCreateWithoutMatchInput>;
export const MatchParticipantCreateWithoutMatchInputObjectZodSchema = makeSchema();
