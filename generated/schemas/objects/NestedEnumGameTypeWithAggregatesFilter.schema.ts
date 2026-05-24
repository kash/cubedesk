import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGameTypeFilterObjectSchema as NestedEnumGameTypeFilterObjectSchema } from './NestedEnumGameTypeFilter.schema'

const nestedenumgametypewithaggregatesfilterSchema = z.object({
  equals: GameTypeSchema.optional(),
  in: GameTypeSchema.array().optional(),
  notIn: GameTypeSchema.array().optional(),
  not: z.union([GameTypeSchema, z.lazy(() => NestedEnumGameTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumGameTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumGameTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumGameTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumGameTypeWithAggregatesFilter> = nestedenumgametypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumGameTypeWithAggregatesFilter>;
export const NestedEnumGameTypeWithAggregatesFilterObjectZodSchema = nestedenumgametypewithaggregatesfilterSchema;
