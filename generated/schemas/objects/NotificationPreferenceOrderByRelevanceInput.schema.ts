import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationPreferenceOrderByRelevanceFieldEnumSchema } from '../enums/NotificationPreferenceOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([NotificationPreferenceOrderByRelevanceFieldEnumSchema, NotificationPreferenceOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const NotificationPreferenceOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.NotificationPreferenceOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceOrderByRelevanceInput>;
export const NotificationPreferenceOrderByRelevanceInputObjectZodSchema = makeSchema();
