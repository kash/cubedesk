import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeWhereInputObjectSchema as BadgeTypeWhereInputObjectSchema } from './BadgeTypeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BadgeTypeWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => BadgeTypeWhereInputObjectSchema).optional()
}).strict();
export const BadgeTypeScalarRelationFilterObjectSchema: z.ZodType<Prisma.BadgeTypeScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeScalarRelationFilter>;
export const BadgeTypeScalarRelationFilterObjectZodSchema = makeSchema();
