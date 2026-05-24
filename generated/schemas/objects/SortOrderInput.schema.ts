import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NullsOrderSchema } from '../enums/NullsOrder.schema'

const makeSchema = () => z.object({
  sort: SortOrderSchema,
  nulls: NullsOrderSchema.optional()
}).strict();
export const SortOrderInputObjectSchema: z.ZodType<Prisma.SortOrderInput> = makeSchema() as unknown as z.ZodType<Prisma.SortOrderInput>;
export const SortOrderInputObjectZodSchema = makeSchema();
