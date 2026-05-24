import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CustomTrainerOrderByRelationAggregateInputObjectSchema as CustomTrainerOrderByRelationAggregateInputObjectSchema } from './CustomTrainerOrderByRelationAggregateInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { CustomTrainerDownloadOrderByRelationAggregateInputObjectSchema as CustomTrainerDownloadOrderByRelationAggregateInputObjectSchema } from './CustomTrainerDownloadOrderByRelationAggregateInput.schema';
import { CustomTrainerLikeOrderByRelationAggregateInputObjectSchema as CustomTrainerLikeOrderByRelationAggregateInputObjectSchema } from './CustomTrainerLikeOrderByRelationAggregateInput.schema';
import { CustomTrainerOrderByRelevanceInputObjectSchema as CustomTrainerOrderByRelevanceInputObjectSchema } from './CustomTrainerOrderByRelevanceInput.schema'

const customtrainerorderbywithrelationinputSchema = z.object({
  id: SortOrderSchema.optional(),
  colors: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cube_type: SortOrderSchema.optional(),
  key: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  like_count: SortOrderSchema.optional(),
  private: SortOrderSchema.optional(),
  copy_of_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  downloaded: SortOrderSchema.optional(),
  group_name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  scrambles: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  solution: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  alt_solutions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  three_d: SortOrderSchema.optional(),
  algo_type: SortOrderSchema.optional(),
  copy_of: z.lazy(() => CustomTrainerOrderByWithRelationInputObjectSchema).optional(),
  copies: z.lazy(() => CustomTrainerOrderByRelationAggregateInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  download_of: z.lazy(() => CustomTrainerDownloadOrderByRelationAggregateInputObjectSchema).optional(),
  downloads: z.lazy(() => CustomTrainerDownloadOrderByRelationAggregateInputObjectSchema).optional(),
  likes: z.lazy(() => CustomTrainerLikeOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => CustomTrainerOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const CustomTrainerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CustomTrainerOrderByWithRelationInput> = customtrainerorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.CustomTrainerOrderByWithRelationInput>;
export const CustomTrainerOrderByWithRelationInputObjectZodSchema = customtrainerorderbywithrelationinputSchema;
