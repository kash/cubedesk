import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TimerBackgroundOrderByRelevanceFieldEnumSchema } from '../enums/TimerBackgroundOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([TimerBackgroundOrderByRelevanceFieldEnumSchema, TimerBackgroundOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const TimerBackgroundOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.TimerBackgroundOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.TimerBackgroundOrderByRelevanceInput>;
export const TimerBackgroundOrderByRelevanceInputObjectZodSchema = makeSchema();
