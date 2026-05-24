import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogWhereInputObjectSchema as BanLogWhereInputObjectSchema } from './BanLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BanLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => BanLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => BanLogWhereInputObjectSchema).optional()
}).strict();
export const BanLogListRelationFilterObjectSchema: z.ZodType<Prisma.BanLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BanLogListRelationFilter>;
export const BanLogListRelationFilterObjectZodSchema = makeSchema();
