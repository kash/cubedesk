import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationOrderByRelevanceFieldEnumSchema } from '../enums/NotificationOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([NotificationOrderByRelevanceFieldEnumSchema, NotificationOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const NotificationOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.NotificationOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationOrderByRelevanceInput>;
export const NotificationOrderByRelevanceInputObjectZodSchema = makeSchema();
