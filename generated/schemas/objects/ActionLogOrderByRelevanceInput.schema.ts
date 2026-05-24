import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogOrderByRelevanceFieldEnumSchema } from '../enums/ActionLogOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([ActionLogOrderByRelevanceFieldEnumSchema, ActionLogOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const ActionLogOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.ActionLogOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogOrderByRelevanceInput>;
export const ActionLogOrderByRelevanceInputObjectZodSchema = makeSchema();
