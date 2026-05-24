import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntegrationOrderByRelevanceFieldEnumSchema } from '../enums/IntegrationOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([IntegrationOrderByRelevanceFieldEnumSchema, IntegrationOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const IntegrationOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.IntegrationOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationOrderByRelevanceInput>;
export const IntegrationOrderByRelevanceInputObjectZodSchema = makeSchema();
