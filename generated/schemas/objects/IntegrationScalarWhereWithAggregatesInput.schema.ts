import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BigIntWithAggregatesFilterObjectSchema as BigIntWithAggregatesFilterObjectSchema } from './BigIntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const integrationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => IntegrationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => IntegrationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => IntegrationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => IntegrationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => IntegrationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  service_name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  auth_token: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  auth_expires_at: z.union([z.lazy(() => BigIntWithAggregatesFilterObjectSchema), z.bigint()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const IntegrationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.IntegrationScalarWhereWithAggregatesInput> = integrationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.IntegrationScalarWhereWithAggregatesInput>;
export const IntegrationScalarWhereWithAggregatesInputObjectZodSchema = integrationscalarwherewithaggregatesinputSchema;
