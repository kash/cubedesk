import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogWhereInputObjectSchema as EloLogWhereInputObjectSchema } from './EloLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => EloLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => EloLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => EloLogWhereInputObjectSchema).optional()
}).strict();
export const EloLogListRelationFilterObjectSchema: z.ZodType<Prisma.EloLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EloLogListRelationFilter>;
export const EloLogListRelationFilterObjectZodSchema = makeSchema();
