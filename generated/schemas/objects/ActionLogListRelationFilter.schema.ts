import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogWhereInputObjectSchema as ActionLogWhereInputObjectSchema } from './ActionLogWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ActionLogWhereInputObjectSchema).optional(),
  some: z.lazy(() => ActionLogWhereInputObjectSchema).optional(),
  none: z.lazy(() => ActionLogWhereInputObjectSchema).optional()
}).strict();
export const ActionLogListRelationFilterObjectSchema: z.ZodType<Prisma.ActionLogListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogListRelationFilter>;
export const ActionLogListRelationFilterObjectZodSchema = makeSchema();
