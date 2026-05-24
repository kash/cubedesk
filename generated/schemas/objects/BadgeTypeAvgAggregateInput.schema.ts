import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  priority: z.literal(true).optional()
}).strict();
export const BadgeTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.BadgeTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeAvgAggregateInputType>;
export const BadgeTypeAvgAggregateInputObjectZodSchema = makeSchema();
