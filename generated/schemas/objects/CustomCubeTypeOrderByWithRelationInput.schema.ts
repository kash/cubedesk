import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SettingOrderByWithRelationInputObjectSchema as SettingOrderByWithRelationInputObjectSchema } from './SettingOrderByWithRelationInput.schema';
import { CustomCubeTypeOrderByRelevanceInputObjectSchema as CustomCubeTypeOrderByRelevanceInputObjectSchema } from './CustomCubeTypeOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  scramble: SortOrderSchema.optional(),
  private: SortOrderSchema.optional(),
  setting: z.lazy(() => SettingOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => CustomCubeTypeOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const CustomCubeTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CustomCubeTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeOrderByWithRelationInput>;
export const CustomCubeTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
