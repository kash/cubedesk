import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SolveIncludeObjectSchema as SolveIncludeObjectSchema } from './objects/SolveInclude.schema';
import { SolveOrderByWithRelationInputObjectSchema as SolveOrderByWithRelationInputObjectSchema } from './objects/SolveOrderByWithRelationInput.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './objects/SolveWhereInput.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './objects/SolveWhereUniqueInput.schema';
import { SolveScalarFieldEnumSchema } from './enums/SolveScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SolveFindFirstSelectSchema: z.ZodType<Prisma.SolveSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    time: z.boolean().optional(),
    raw_time: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    scramble: z.boolean().optional(),
    session_id: z.boolean().optional(),
    started_at: z.boolean().optional(),
    ended_at: z.boolean().optional(),
    dnf: z.boolean().optional(),
    plus_two: z.boolean().optional(),
    notes: z.boolean().optional(),
    trainer_name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    bulk: z.boolean().optional(),
    inspection_time: z.boolean().optional(),
    is_smart_cube: z.boolean().optional(),
    smart_put_down_time: z.boolean().optional(),
    smart_turns: z.boolean().optional(),
    smart_turn_count: z.boolean().optional(),
    smart_device_id: z.boolean().optional(),
    match_id: z.boolean().optional(),
    match_participant_id: z.boolean().optional(),
    share_code: z.boolean().optional(),
    from_timer: z.boolean().optional(),
    game_session_id: z.boolean().optional(),
    custom_scramble: z.boolean().optional(),
    training_session_id: z.boolean().optional(),
    game_session: z.boolean().optional(),
    match: z.boolean().optional(),
    match_participant: z.boolean().optional(),
    session: z.boolean().optional(),
    smart_device: z.boolean().optional(),
    user: z.boolean().optional(),
    solve_method_steps: z.boolean().optional(),
    solve_views: z.boolean().optional(),
    top_average_1: z.boolean().optional(),
    top_average_2: z.boolean().optional(),
    top_average_3: z.boolean().optional(),
    top_average_4: z.boolean().optional(),
    top_average_5: z.boolean().optional(),
    top_solve: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SolveSelect>;

export const SolveFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    time: z.boolean().optional(),
    raw_time: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    scramble: z.boolean().optional(),
    session_id: z.boolean().optional(),
    started_at: z.boolean().optional(),
    ended_at: z.boolean().optional(),
    dnf: z.boolean().optional(),
    plus_two: z.boolean().optional(),
    notes: z.boolean().optional(),
    trainer_name: z.boolean().optional(),
    created_at: z.boolean().optional(),
    bulk: z.boolean().optional(),
    inspection_time: z.boolean().optional(),
    is_smart_cube: z.boolean().optional(),
    smart_put_down_time: z.boolean().optional(),
    smart_turns: z.boolean().optional(),
    smart_turn_count: z.boolean().optional(),
    smart_device_id: z.boolean().optional(),
    match_id: z.boolean().optional(),
    match_participant_id: z.boolean().optional(),
    share_code: z.boolean().optional(),
    from_timer: z.boolean().optional(),
    game_session_id: z.boolean().optional(),
    custom_scramble: z.boolean().optional(),
    training_session_id: z.boolean().optional(),
    game_session: z.boolean().optional(),
    match: z.boolean().optional(),
    match_participant: z.boolean().optional(),
    session: z.boolean().optional(),
    smart_device: z.boolean().optional(),
    user: z.boolean().optional(),
    solve_method_steps: z.boolean().optional(),
    solve_views: z.boolean().optional(),
    top_average_1: z.boolean().optional(),
    top_average_2: z.boolean().optional(),
    top_average_3: z.boolean().optional(),
    top_average_4: z.boolean().optional(),
    top_average_5: z.boolean().optional(),
    top_solve: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SolveFindFirstSchema: z.ZodType<Prisma.SolveFindFirstArgs> = z.object({ select: SolveFindFirstSelectSchema.optional(), include: z.lazy(() => SolveIncludeObjectSchema.optional()), orderBy: z.union([SolveOrderByWithRelationInputObjectSchema, SolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveWhereInputObjectSchema.optional(), cursor: SolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SolveScalarFieldEnumSchema, SolveScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SolveFindFirstArgs>;

export const SolveFindFirstZodSchema = z.object({ select: SolveFindFirstSelectSchema.optional(), include: z.lazy(() => SolveIncludeObjectSchema.optional()), orderBy: z.union([SolveOrderByWithRelationInputObjectSchema, SolveOrderByWithRelationInputObjectSchema.array()]).optional(), where: SolveWhereInputObjectSchema.optional(), cursor: SolveWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SolveScalarFieldEnumSchema, SolveScalarFieldEnumSchema.array()]).optional() }).strict();