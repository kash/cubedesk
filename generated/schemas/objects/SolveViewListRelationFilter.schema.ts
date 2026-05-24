import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewWhereInputObjectSchema as SolveViewWhereInputObjectSchema } from './SolveViewWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SolveViewWhereInputObjectSchema).optional(),
  some: z.lazy(() => SolveViewWhereInputObjectSchema).optional(),
  none: z.lazy(() => SolveViewWhereInputObjectSchema).optional()
}).strict();
export const SolveViewListRelationFilterObjectSchema: z.ZodType<Prisma.SolveViewListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewListRelationFilter>;
export const SolveViewListRelationFilterObjectZodSchema = makeSchema();
