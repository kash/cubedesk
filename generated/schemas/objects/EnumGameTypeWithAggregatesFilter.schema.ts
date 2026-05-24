import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema';
import { NestedEnumGameTypeWithAggregatesFilterObjectSchema as NestedEnumGameTypeWithAggregatesFilterObjectSchema } from './NestedEnumGameTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGameTypeFilterObjectSchema as NestedEnumGameTypeFilterObjectSchema } from './NestedEnumGameTypeFilter.schema'

const makeSchema = () => z.object({
  equals: GameTypeSchema.optional(),
  in: GameTypeSchema.array().optional(),
  notIn: GameTypeSchema.array().optional(),
  not: z.union([GameTypeSchema, z.lazy(() => NestedEnumGameTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumGameTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumGameTypeFilterObjectSchema).optional()
}).strict();
export const EnumGameTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumGameTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumGameTypeWithAggregatesFilter>;
export const EnumGameTypeWithAggregatesFilterObjectZodSchema = makeSchema();
