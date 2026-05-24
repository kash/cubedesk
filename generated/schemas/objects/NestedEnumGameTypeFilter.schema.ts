import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameTypeSchema } from '../enums/GameType.schema'

const nestedenumgametypefilterSchema = z.object({
  equals: GameTypeSchema.optional(),
  in: GameTypeSchema.array().optional(),
  notIn: GameTypeSchema.array().optional(),
  not: z.union([GameTypeSchema, z.lazy(() => NestedEnumGameTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumGameTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumGameTypeFilter> = nestedenumgametypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumGameTypeFilter>;
export const NestedEnumGameTypeFilterObjectZodSchema = nestedenumgametypefilterSchema;
