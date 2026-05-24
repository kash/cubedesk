import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SettingIncludeObjectSchema as SettingIncludeObjectSchema } from './objects/SettingInclude.schema';
import { SettingOrderByWithRelationInputObjectSchema as SettingOrderByWithRelationInputObjectSchema } from './objects/SettingOrderByWithRelationInput.schema';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './objects/SettingWhereInput.schema';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './objects/SettingWhereUniqueInput.schema';
import { SettingScalarFieldEnumSchema } from './enums/SettingScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SettingFindManySelectSchema: z.ZodType<Prisma.SettingSelect> = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    focus_mode: z.boolean().optional(),
    freeze_time: z.boolean().optional(),
    inspection: z.boolean().optional(),
    manual_entry: z.boolean().optional(),
    inspection_delay: z.boolean().optional(),
    inverse_time_list: z.boolean().optional(),
    hide_time_when_solving: z.boolean().optional(),
    nav_collapsed: z.boolean().optional(),
    pb_confetti: z.boolean().optional(),
    play_inspection_sound: z.boolean().optional(),
    zero_out_time_after_solve: z.boolean().optional(),
    confirm_delete_solve: z.boolean().optional(),
    require_period_in_manual_time_entry: z.boolean().optional(),
    created_at: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    session_id: z.boolean().optional(),
    timer_decimal_points: z.boolean().optional(),
    beta_tester: z.boolean().optional(),
    use_space_with_smart_cube: z.boolean().optional(),
    inspection_auto_start: z.boolean().optional(),
    stats_module_json: z.boolean().optional(),
    custom_cube_types: z.boolean().optional(),
    user: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SettingSelect>;

export const SettingFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    focus_mode: z.boolean().optional(),
    freeze_time: z.boolean().optional(),
    inspection: z.boolean().optional(),
    manual_entry: z.boolean().optional(),
    inspection_delay: z.boolean().optional(),
    inverse_time_list: z.boolean().optional(),
    hide_time_when_solving: z.boolean().optional(),
    nav_collapsed: z.boolean().optional(),
    pb_confetti: z.boolean().optional(),
    play_inspection_sound: z.boolean().optional(),
    zero_out_time_after_solve: z.boolean().optional(),
    confirm_delete_solve: z.boolean().optional(),
    require_period_in_manual_time_entry: z.boolean().optional(),
    created_at: z.boolean().optional(),
    cube_type: z.boolean().optional(),
    session_id: z.boolean().optional(),
    timer_decimal_points: z.boolean().optional(),
    beta_tester: z.boolean().optional(),
    use_space_with_smart_cube: z.boolean().optional(),
    inspection_auto_start: z.boolean().optional(),
    stats_module_json: z.boolean().optional(),
    custom_cube_types: z.boolean().optional(),
    user: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SettingFindManySchema: z.ZodType<Prisma.SettingFindManyArgs> = z.object({ select: SettingFindManySelectSchema.optional(), include: z.lazy(() => SettingIncludeObjectSchema.optional()), orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettingScalarFieldEnumSchema, SettingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SettingFindManyArgs>;

export const SettingFindManyZodSchema = z.object({ select: SettingFindManySelectSchema.optional(), include: z.lazy(() => SettingIncludeObjectSchema.optional()), orderBy: z.union([SettingOrderByWithRelationInputObjectSchema, SettingOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingWhereInputObjectSchema.optional(), cursor: SettingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettingScalarFieldEnumSchema, SettingScalarFieldEnumSchema.array()]).optional() }).strict();