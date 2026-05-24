import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserFeatureStateOrderByRelevanceFieldEnumSchema } from '../enums/UserFeatureStateOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([UserFeatureStateOrderByRelevanceFieldEnumSchema, UserFeatureStateOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const UserFeatureStateOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.UserFeatureStateOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateOrderByRelevanceInput>;
export const UserFeatureStateOrderByRelevanceInputObjectZodSchema = makeSchema();
