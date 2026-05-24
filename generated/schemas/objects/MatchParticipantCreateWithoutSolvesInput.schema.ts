import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCreateNestedOneWithoutParticipantsInputObjectSchema as MatchCreateNestedOneWithoutParticipantsInputObjectSchema } from './MatchCreateNestedOneWithoutParticipantsInput.schema';
import { UserAccountCreateNestedOneWithoutMatch_participationsInputObjectSchema as UserAccountCreateNestedOneWithoutMatch_participationsInputObjectSchema } from './UserAccountCreateNestedOneWithoutMatch_participationsInput.schema'

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
  match: z.lazy(() => MatchCreateNestedOneWithoutParticipantsInputObjectSchema),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutMatch_participationsInputObjectSchema)
}).strict();
export const MatchParticipantCreateWithoutSolvesInputObjectSchema: z.ZodType<Prisma.MatchParticipantCreateWithoutSolvesInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantCreateWithoutSolvesInput>;
export const MatchParticipantCreateWithoutSolvesInputObjectZodSchema = makeSchema();
