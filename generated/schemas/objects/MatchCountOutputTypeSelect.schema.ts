import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCountOutputTypeCountEloLogArgsObjectSchema as MatchCountOutputTypeCountEloLogArgsObjectSchema } from './MatchCountOutputTypeCountEloLogArgs.schema';
import { MatchCountOutputTypeCountGameSessionArgsObjectSchema as MatchCountOutputTypeCountGameSessionArgsObjectSchema } from './MatchCountOutputTypeCountGameSessionArgs.schema';
import { MatchCountOutputTypeCountParticipantsArgsObjectSchema as MatchCountOutputTypeCountParticipantsArgsObjectSchema } from './MatchCountOutputTypeCountParticipantsArgs.schema';
import { MatchCountOutputTypeCountSolvesArgsObjectSchema as MatchCountOutputTypeCountSolvesArgsObjectSchema } from './MatchCountOutputTypeCountSolvesArgs.schema'

const makeSchema = () => z.object({
  elo_log: z.union([z.boolean(), z.lazy(() => MatchCountOutputTypeCountEloLogArgsObjectSchema)]).optional(),
  game_session: z.union([z.boolean(), z.lazy(() => MatchCountOutputTypeCountGameSessionArgsObjectSchema)]).optional(),
  participants: z.union([z.boolean(), z.lazy(() => MatchCountOutputTypeCountParticipantsArgsObjectSchema)]).optional(),
  solves: z.union([z.boolean(), z.lazy(() => MatchCountOutputTypeCountSolvesArgsObjectSchema)]).optional()
}).strict();
export const MatchCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MatchCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MatchCountOutputTypeSelect>;
export const MatchCountOutputTypeSelectObjectZodSchema = makeSchema();
