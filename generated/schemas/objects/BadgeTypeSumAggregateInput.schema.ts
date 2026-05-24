import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  priority: z.literal(true).optional()
}).strict();
export const BadgeTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.BadgeTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeSumAggregateInputType>;
export const BadgeTypeSumAggregateInputObjectZodSchema = makeSchema();
