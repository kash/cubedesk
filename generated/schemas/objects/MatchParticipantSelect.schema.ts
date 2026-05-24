import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchArgsObjectSchema as MatchArgsObjectSchema } from './MatchArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { SolveFindManySchema as SolveFindManySchema } from '../findManySolve.schema';
import { MatchParticipantCountOutputTypeArgsObjectSchema as MatchParticipantCountOutputTypeArgsObjectSchema } from './MatchParticipantCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  match_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  resigned: z.boolean().optional(),
  forfeited: z.boolean().optional(),
  position: z.boolean().optional(),
  won: z.boolean().optional(),
  lost: z.boolean().optional(),
  abandoned: z.boolean().optional(),
  aborted: z.boolean().optional(),
  match: z.union([z.boolean(), z.lazy(() => MatchArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  solves: z.union([z.boolean(), z.lazy(() => SolveFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MatchParticipantCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MatchParticipantSelectObjectSchema: z.ZodType<Prisma.MatchParticipantSelect> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantSelect>;
export const MatchParticipantSelectObjectZodSchema = makeSchema();
