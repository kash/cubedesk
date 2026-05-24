import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogOrderByRelevanceFieldEnumSchema } from '../enums/BanLogOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([BanLogOrderByRelevanceFieldEnumSchema, BanLogOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const BanLogOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.BanLogOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogOrderByRelevanceInput>;
export const BanLogOrderByRelevanceInputObjectZodSchema = makeSchema();
