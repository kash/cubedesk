import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SettingSelectObjectSchema as SettingSelectObjectSchema } from './objects/SettingSelect.schema';
import { SettingIncludeObjectSchema as SettingIncludeObjectSchema } from './objects/SettingInclude.schema';
import { SettingCreateInputObjectSchema as SettingCreateInputObjectSchema } from './objects/SettingCreateInput.schema';
import { SettingUncheckedCreateInputObjectSchema as SettingUncheckedCreateInputObjectSchema } from './objects/SettingUncheckedCreateInput.schema';

export const SettingCreateOneSchema: z.ZodType<Prisma.SettingCreateArgs> = z.object({ select: SettingSelectObjectSchema.optional(), include: SettingIncludeObjectSchema.optional(), data: z.union([SettingCreateInputObjectSchema, SettingUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SettingCreateArgs>;

export const SettingCreateOneZodSchema = z.object({ select: SettingSelectObjectSchema.optional(), include: SettingIncludeObjectSchema.optional(), data: z.union([SettingCreateInputObjectSchema, SettingUncheckedCreateInputObjectSchema]) }).strict();