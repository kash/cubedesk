import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GameSessionOrderByWithRelationInputObjectSchema as GameSessionOrderByWithRelationInputObjectSchema } from './GameSessionOrderByWithRelationInput.schema';
import { MatchOrderByWithRelationInputObjectSchema as MatchOrderByWithRelationInputObjectSchema } from './MatchOrderByWithRelationInput.schema';
import { MatchParticipantOrderByWithRelationInputObjectSchema as MatchParticipantOrderByWithRelationInputObjectSchema } from './MatchParticipantOrderByWithRelationInput.schema';
import { SessionOrderByWithRelationInputObjectSchema as SessionOrderByWithRelationInputObjectSchema } from './SessionOrderByWithRelationInput.schema';
import { SmartDeviceOrderByWithRelationInputObjectSchema as SmartDeviceOrderByWithRelationInputObjectSchema } from './SmartDeviceOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { SolveMethodStepOrderByRelationAggregateInputObjectSchema as SolveMethodStepOrderByRelationAggregateInputObjectSchema } from './SolveMethodStepOrderByRelationAggregateInput.schema';
import { SolveViewOrderByRelationAggregateInputObjectSchema as SolveViewOrderByRelationAggregateInputObjectSchema } from './SolveViewOrderByRelationAggregateInput.schema';
import { TopAverageOrderByRelationAggregateInputObjectSchema as TopAverageOrderByRelationAggregateInputObjectSchema } from './TopAverageOrderByRelationAggregateInput.schema';
import { TopSolveOrderByRelationAggregateInputObjectSchema as TopSolveOrderByRelationAggregateInputObjectSchema } from './TopSolveOrderByRelationAggregateInput.schema';
import { SolveOrderByRelevanceInputObjectSchema as SolveOrderByRelevanceInputObjectSchema } from './SolveOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  raw_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cube_type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scramble: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  started_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ended_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dnf: SortOrderSchema.optional(),
  plus_two: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  trainer_name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  bulk: SortOrderSchema.optional(),
  inspection_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_smart_cube: SortOrderSchema.optional(),
  smart_put_down_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  smart_turns: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  smart_turn_count: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  smart_device_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  match_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  match_participant_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  share_code: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  from_timer: SortOrderSchema.optional(),
  game_session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  custom_scramble: SortOrderSchema.optional(),
  training_session_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  game_session: z.lazy(() => GameSessionOrderByWithRelationInputObjectSchema).optional(),
  match: z.lazy(() => MatchOrderByWithRelationInputObjectSchema).optional(),
  match_participant: z.lazy(() => MatchParticipantOrderByWithRelationInputObjectSchema).optional(),
  session: z.lazy(() => SessionOrderByWithRelationInputObjectSchema).optional(),
  smart_device: z.lazy(() => SmartDeviceOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  solve_method_steps: z.lazy(() => SolveMethodStepOrderByRelationAggregateInputObjectSchema).optional(),
  solve_views: z.lazy(() => SolveViewOrderByRelationAggregateInputObjectSchema).optional(),
  top_average_1: z.lazy(() => TopAverageOrderByRelationAggregateInputObjectSchema).optional(),
  top_average_2: z.lazy(() => TopAverageOrderByRelationAggregateInputObjectSchema).optional(),
  top_average_3: z.lazy(() => TopAverageOrderByRelationAggregateInputObjectSchema).optional(),
  top_average_4: z.lazy(() => TopAverageOrderByRelationAggregateInputObjectSchema).optional(),
  top_average_5: z.lazy(() => TopAverageOrderByRelationAggregateInputObjectSchema).optional(),
  top_solve: z.lazy(() => TopSolveOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => SolveOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const SolveOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SolveOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveOrderByWithRelationInput>;
export const SolveOrderByWithRelationInputObjectZodSchema = makeSchema();
