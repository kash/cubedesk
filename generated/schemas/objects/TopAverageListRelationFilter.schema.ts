import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereInputObjectSchema as TopAverageWhereInputObjectSchema } from './TopAverageWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TopAverageWhereInputObjectSchema).optional(),
  some: z.lazy(() => TopAverageWhereInputObjectSchema).optional(),
  none: z.lazy(() => TopAverageWhereInputObjectSchema).optional()
}).strict();
export const TopAverageListRelationFilterObjectSchema: z.ZodType<Prisma.TopAverageListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageListRelationFilter>;
export const TopAverageListRelationFilterObjectZodSchema = makeSchema();
