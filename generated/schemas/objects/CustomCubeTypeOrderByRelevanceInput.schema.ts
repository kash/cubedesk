import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeOrderByRelevanceFieldEnumSchema } from '../enums/CustomCubeTypeOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([CustomCubeTypeOrderByRelevanceFieldEnumSchema, CustomCubeTypeOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const CustomCubeTypeOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeOrderByRelevanceInput>;
export const CustomCubeTypeOrderByRelevanceInputObjectZodSchema = makeSchema();
