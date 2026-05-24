import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SettingSelectObjectSchema as SettingSelectObjectSchema } from './objects/SettingSelect.schema';
import { SettingCreateManyInputObjectSchema as SettingCreateManyInputObjectSchema } from './objects/SettingCreateManyInput.schema';

export const SettingCreateManyAndReturnSchema: z.ZodType<Prisma.SettingCreateManyAndReturnArgs> = z.object({ select: SettingSelectObjectSchema.optional(), data: z.union([ SettingCreateManyInputObjectSchema, z.array(SettingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SettingCreateManyAndReturnArgs>;

export const SettingCreateManyAndReturnZodSchema = z.object({ select: SettingSelectObjectSchema.optional(), data: z.union([ SettingCreateManyInputObjectSchema, z.array(SettingCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();