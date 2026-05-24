import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountOrderByRelevanceFieldEnumSchema } from '../enums/UserAccountOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([UserAccountOrderByRelevanceFieldEnumSchema, UserAccountOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const UserAccountOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.UserAccountOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountOrderByRelevanceInput>;
export const UserAccountOrderByRelevanceInputObjectZodSchema = makeSchema();
