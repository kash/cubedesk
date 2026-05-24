import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { TrainerFavoriteOrderByRelevanceInputObjectSchema as TrainerFavoriteOrderByRelevanceInputObjectSchema } from './TrainerFavoriteOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  cube_key: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => TrainerFavoriteOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const TrainerFavoriteOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteOrderByWithRelationInput>;
export const TrainerFavoriteOrderByWithRelationInputObjectZodSchema = makeSchema();
