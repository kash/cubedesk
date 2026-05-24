import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageOrderByRelevanceFieldEnumSchema } from '../enums/ImageOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([ImageOrderByRelevanceFieldEnumSchema, ImageOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const ImageOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.ImageOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageOrderByRelevanceInput>;
export const ImageOrderByRelevanceInputObjectZodSchema = makeSchema();
