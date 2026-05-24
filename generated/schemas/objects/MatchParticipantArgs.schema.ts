import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantSelectObjectSchema as MatchParticipantSelectObjectSchema } from './MatchParticipantSelect.schema';
import { MatchParticipantIncludeObjectSchema as MatchParticipantIncludeObjectSchema } from './MatchParticipantInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MatchParticipantSelectObjectSchema).optional(),
  include: z.lazy(() => MatchParticipantIncludeObjectSchema).optional()
}).strict();
export const MatchParticipantArgsObjectSchema = makeSchema();
export const MatchParticipantArgsObjectZodSchema = makeSchema();
