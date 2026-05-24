import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SettingSelectObjectSchema as SettingSelectObjectSchema } from './objects/SettingSelect.schema';
import { SettingIncludeObjectSchema as SettingIncludeObjectSchema } from './objects/SettingInclude.schema';
import { SettingWhereUniqueInputObjectSchema as SettingWhereUniqueInputObjectSchema } from './objects/SettingWhereUniqueInput.schema';
import { SettingCreateInputObjectSchema as SettingCreateInputObjectSchema } from './objects/SettingCreateInput.schema';
import { SettingUncheckedCreateInputObjectSchema as SettingUncheckedCreateInputObjectSchema } from './objects/SettingUncheckedCreateInput.schema';
import { SettingUpdateInputObjectSchema as SettingUpdateInputObjectSchema } from './objects/SettingUpdateInput.schema';
import { SettingUncheckedUpdateInputObjectSchema as SettingUncheckedUpdateInputObjectSchema } from './objects/SettingUncheckedUpdateInput.schema';

export const SettingUpsertOneSchema: z.ZodType<Prisma.SettingUpsertArgs> = z.object({ select: SettingSelectObjectSchema.optional(), include: SettingIncludeObjectSchema.optional(), where: SettingWhereUniqueInputObjectSchema, create: z.union([ SettingCreateInputObjectSchema, SettingUncheckedCreateInputObjectSchema ]), update: z.union([ SettingUpdateInputObjectSchema, SettingUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SettingUpsertArgs>;

export const SettingUpsertOneZodSchema = z.object({ select: SettingSelectObjectSchema.optional(), include: SettingIncludeObjectSchema.optional(), where: SettingWhereUniqueInputObjectSchema, create: z.union([ SettingCreateInputObjectSchema, SettingUncheckedCreateInputObjectSchema ]), update: z.union([ SettingUpdateInputObjectSchema, SettingUncheckedUpdateInputObjectSchema ]) }).strict();