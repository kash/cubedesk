import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SettingSelectObjectSchema as SettingSelectObjectSchema } from './objects/SettingSelect.schema';
import { SettingIncludeObjectSchema as SettingIncludeObjectSchema } from './objects/SettingInclude.schema';
import { SettingUpdateInputObjectSchema as SettingUpdateInputObjectSchema } from './objects/SettingUpdateInput.schema';
import { SettingUncheckedUpdateInputObjectSchema as SettingUncheckedUpdateInputObjectSchema } from './objects/SettingUncheckedUpdateInput.schema';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './objects/SettingWhereUniqueInput.schema';

export const SettingUpdateOneSchema: z.ZodType<Prisma.SettingUpdateArgs> = z.object({ select: SettingSelectObjectSchema.optional(), include: SettingIncludeObjectSchema.optional(), data: z.union([SettingUpdateInputObjectSchema, SettingUncheckedUpdateInputObjectSchema]), where: SettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingUpdateArgs>;

export const SettingUpdateOneZodSchema = z.object({ select: SettingSelectObjectSchema.optional(), include: SettingIncludeObjectSchema.optional(), data: z.union([SettingUpdateInputObjectSchema, SettingUncheckedUpdateInputObjectSchema]), where: SettingWhereUniqueInputObjectSchema }).strict();