import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AdViewWhereInputObjectSchema as AdViewWhereInputObjectSchema } from './AdViewWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AdViewWhereInputObjectSchema).optional(),
  some: z.lazy(() => AdViewWhereInputObjectSchema).optional(),
  none: z.lazy(() => AdViewWhereInputObjectSchema).optional()
}).strict();
export const AdViewListRelationFilterObjectSchema: z.ZodType<Prisma.AdViewListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AdViewListRelationFilter>;
export const AdViewListRelationFilterObjectZodSchema = makeSchema();
