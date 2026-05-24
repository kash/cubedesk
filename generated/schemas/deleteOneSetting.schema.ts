import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SettingSelectObjectSchema as SettingSelectObjectSchema } from './objects/SettingSelect.schema';
import { SettingIncludeObjectSchema as SettingIncludeObjectSchema } from './objects/SettingInclude.schema';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './objects/SettingWhereUniqueInput.schema';

export const SettingDeleteOneSchema: z.ZodType<Prisma.SettingDeleteArgs> = z.object({ select: SettingSelectObjectSchema.optional(), include: SettingIncludeObjectSchema.optional(), where: SettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingDeleteArgs>;

export const SettingDeleteOneZodSchema = z.object({ select: SettingSelectObjectSchema.optional(), include: SettingIncludeObjectSchema.optional(), where: SettingWhereUniqueInputObjectSchema }).strict();