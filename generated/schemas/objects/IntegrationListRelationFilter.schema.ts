import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntegrationWhereInputObjectSchema as IntegrationWhereInputObjectSchema } from './IntegrationWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => IntegrationWhereInputObjectSchema).optional(),
  some: z.lazy(() => IntegrationWhereInputObjectSchema).optional(),
  none: z.lazy(() => IntegrationWhereInputObjectSchema).optional()
}).strict();
export const IntegrationListRelationFilterObjectSchema: z.ZodType<Prisma.IntegrationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.IntegrationListRelationFilter>;
export const IntegrationListRelationFilterObjectZodSchema = makeSchema();
