import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchArgsObjectSchema as MatchArgsObjectSchema } from './MatchArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { SolveFindManySchema as SolveFindManySchema } from '../findManySolve.schema';
import { MatchParticipantCountOutputTypeArgsObjectSchema as MatchParticipantCountOutputTypeArgsObjectSchema } from './MatchParticipantCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  match: z.union([z.boolean(), z.lazy(() => MatchArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  solves: z.union([z.boolean(), z.lazy(() => SolveFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => MatchParticipantCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MatchParticipantIncludeObjectSchema: z.ZodType<Prisma.MatchParticipantInclude> = makeSchema() as unknown as z.ZodType<Prisma.MatchParticipantInclude>;
export const MatchParticipantIncludeObjectZodSchema = makeSchema();
