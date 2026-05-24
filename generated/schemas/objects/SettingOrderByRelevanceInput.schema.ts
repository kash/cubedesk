import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingOrderByRelevanceFieldEnumSchema } from '../enums/SettingOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([SettingOrderByRelevanceFieldEnumSchema, SettingOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const SettingOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.SettingOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingOrderByRelevanceInput>;
export const SettingOrderByRelevanceInputObjectZodSchema = makeSchema();
