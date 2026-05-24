import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AlgorithmOverrideWhereInputObjectSchema as AlgorithmOverrideWhereInputObjectSchema } from './AlgorithmOverrideWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AlgorithmOverrideWhereInputObjectSchema).optional(),
  some: z.lazy(() => AlgorithmOverrideWhereInputObjectSchema).optional(),
  none: z.lazy(() => AlgorithmOverrideWhereInputObjectSchema).optional()
}).strict();
export const AlgorithmOverrideListRelationFilterObjectSchema: z.ZodType<Prisma.AlgorithmOverrideListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideListRelationFilter>;
export const AlgorithmOverrideListRelationFilterObjectZodSchema = makeSchema();
