import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const integrationscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => IntegrationScalarWhereInputObjectSchema), z.lazy(() => IntegrationScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => IntegrationScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => IntegrationScalarWhereInputObjectSchema), z.lazy(() => IntegrationScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  service_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  auth_token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  auth_expires_at: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const IntegrationScalarWhereInputObjectSchema: z.ZodType<Prisma.IntegrationScalarWhereInput> = integrationscalarwhereinputSchema as unknown as z.ZodType<Prisma.IntegrationScalarWhereInput>;
export const IntegrationScalarWhereInputObjectZodSchema = integrationscalarwhereinputSchema;
