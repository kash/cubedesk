import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchParticipantCountOutputTypeCountSolvesArgsObjectSchema as MatchParticipantCountOutputTypeCountSolvesArgsObjectSchema } from './MatchParticipantCountOutputTypeCountSolvesArgs.schema'

const makeSchema = () => z.object({
  solves: z.union([z.boolean(), z.lazy(() => MatchParticipantCountOutputTypeCountSolvesArgsObjectSchema)]).optional()
}).strict();
export const MatchParticipantCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MatchParticipantCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantCountOutputTypeSelect>;
export const MatchParticipantCountOutputTypeSelectObjectZodSchema = makeSchema();
