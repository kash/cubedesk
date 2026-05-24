import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeWhereInputObjectSchema as BadgeWhereInputObjectSchema } from './BadgeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BadgeWhereInputObjectSchema).optional(),
  some: z.lazy(() => BadgeWhereInputObjectSchema).optional(),
  none: z.lazy(() => BadgeWhereInputObjectSchema).optional()
}).strict();
export const BadgeListRelationFilterObjectSchema: z.ZodType<Prisma.BadgeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BadgeListRelationFilter>;
export const BadgeListRelationFilterObjectZodSchema = makeSchema();
