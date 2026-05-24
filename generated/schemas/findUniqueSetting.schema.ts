import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SettingSelectObjectSchema as SettingSelectObjectSchema } from './objects/SettingSelect.schema';
import { SettingIncludeObjectSchema as SettingIncludeObjectSchema } from './objects/SettingInclude.schema';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './objects/SettingWhereUniqueInput.schema';

export const SettingFindUniqueSchema: z.ZodType<Prisma.SettingFindUniqueArgs> = z.object({ select: SettingSelectObjectSchema.optional(), include: SettingIncludeObjectSchema.optional(), where: SettingWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingFindUniqueArgs>;

export const SettingFindUniqueZodSchema = z.object({ select: SettingSelectObjectSchema.optional(), include: SettingIncludeObjectSchema.optional(), where: SettingWhereUniqueInputObjectSchema }).strict();