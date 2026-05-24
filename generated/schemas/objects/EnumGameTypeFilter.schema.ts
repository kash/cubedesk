import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema';
import { NestedEnumGameTypeFilterObjectSchema as NestedEnumGameTypeFilterObjectSchema } from './NestedEnumGameTypeFilter.schema'

const makeSchema = () => z.object({
  equals: GameTypeSchema.optional(),
  in: GameTypeSchema.array().optional(),
  notIn: GameTypeSchema.array().optional(),
  not: z.union([GameTypeSchema, z.lazy(() => NestedEnumGameTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumGameTypeFilterObjectSchema: z.ZodType<Prisma.EnumGameTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumGameTypeFilter>;
export const EnumGameTypeFilterObjectZodSchema = makeSchema();
