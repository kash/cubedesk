import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  elimination_starting_time_seconds: z.literal(true).optional(),
  elimination_percent_change_rate: z.literal(true).optional(),
  head_to_head_target_win_count: z.literal(true).optional(),
  gauntlet_time_multiplier: z.literal(true).optional()
}).strict();
export const GameOptionsAvgAggregateInputObjectSchema: z.ZodType<Prisma.GameOptionsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsAvgAggregateInputType>;
export const GameOptionsAvgAggregateInputObjectZodSchema = makeSchema();
