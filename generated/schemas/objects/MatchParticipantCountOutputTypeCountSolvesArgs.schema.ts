import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereInputObjectSchema).optional()
}).strict();
export const MatchParticipantCountOutputTypeCountSolvesArgsObjectSchema = makeSchema();
export const MatchParticipantCountOutputTypeCountSolvesArgsObjectZodSchema = makeSchema();
