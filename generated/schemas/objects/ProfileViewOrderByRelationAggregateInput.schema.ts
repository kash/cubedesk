import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProfileViewOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProfileViewOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewOrderByRelationAggregateInput>;
export const ProfileViewOrderByRelationAggregateInputObjectZodSchema = makeSchema();
