import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantCountOutputTypeSelectObjectSchema as MatchParticipantCountOutputTypeSelectObjectSchema } from './MatchParticipantCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MatchParticipantCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const MatchParticipantCountOutputTypeArgsObjectSchema = makeSchema();
export const MatchParticipantCountOutputTypeArgsObjectZodSchema = makeSchema();
