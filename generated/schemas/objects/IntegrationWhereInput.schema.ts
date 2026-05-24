import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BigIntFilterObjectSchema as BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema'

const integrationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => IntegrationWhereInputObjectSchema), z.lazy(() => IntegrationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => IntegrationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => IntegrationWhereInputObjectSchema), z.lazy(() => IntegrationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  service_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  auth_token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  auth_expires_at: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional()
}).strict();
export const IntegrationWhereInputObjectSchema: z.ZodType<Prisma.IntegrationWhereInput> = integrationwhereinputSchema as unknown as z.ZodType<Prisma.IntegrationWhereInput>;
export const IntegrationWhereInputObjectZodSchema = integrationwhereinputSchema;
