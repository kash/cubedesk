import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeWhereInputObjectSchema as BadgeTypeWhereInputObjectSchema } from './BadgeTypeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => BadgeTypeWhereInputObjectSchema).optional(),
  some: z.lazy(() => BadgeTypeWhereInputObjectSchema).optional(),
  none: z.lazy(() => BadgeTypeWhereInputObjectSchema).optional()
}).strict();
export const BadgeTypeListRelationFilterObjectSchema: z.ZodType<Prisma.BadgeTypeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeListRelationFilter>;
export const BadgeTypeListRelationFilterObjectZodSchema = makeSchema();
