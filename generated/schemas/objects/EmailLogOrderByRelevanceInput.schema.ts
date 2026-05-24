import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EmailLogOrderByRelevanceFieldEnumSchema } from '../enums/EmailLogOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([EmailLogOrderByRelevanceFieldEnumSchema, EmailLogOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const EmailLogOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.EmailLogOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogOrderByRelevanceInput>;
export const EmailLogOrderByRelevanceInputObjectZodSchema = makeSchema();
