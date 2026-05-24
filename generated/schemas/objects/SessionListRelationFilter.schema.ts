import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './SessionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SessionWhereInputObjectSchema).optional(),
  some: z.lazy(() => SessionWhereInputObjectSchema).optional(),
  none: z.lazy(() => SessionWhereInputObjectSchema).optional()
}).strict();
export const SessionListRelationFilterObjectSchema: z.ZodType<Prisma.SessionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SessionListRelationFilter>;
export const SessionListRelationFilterObjectZodSchema = makeSchema();
