import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SettingSelectObjectSchema as SettingSelectObjectSchema } from './objects/SettingSelect.schema';
import { SettingUpdateManyMutationInputObjectSchema as SettingUpdateManyMutationInputObjectSchema } from './objects/SettingUpdateManyMutationInput.schema';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './objects/SettingWhereInput.schema';

export const SettingUpdateManyAndReturnSchema: z.ZodType<Prisma.SettingUpdateManyAndReturnArgs> = z.object({ select: SettingSelectObjectSchema.optional(), data: SettingUpdateManyMutationInputObjectSchema, where: SettingWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SettingUpdateManyAndReturnArgs>;

export const SettingUpdateManyAndReturnZodSchema = z.object({ select: SettingSelectObjectSchema.optional(), data: SettingUpdateManyMutationInputObjectSchema, where: SettingWhereInputObjectSchema.optional() }).strict();