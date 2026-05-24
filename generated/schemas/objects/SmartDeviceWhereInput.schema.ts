import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserAccountScalarRelationFilterObjectSchema as UserAccountScalarRelationFilterObjectSchema } from './UserAccountScalarRelationFilter.schema';
import { UserAccountWhereInputObjectSchema as UserAccountWhereInputObjectSchema } from './UserAccountWhereInput.schema';
import { SolveListRelationFilterObjectSchema as SolveListRelationFilterObjectSchema } from './SolveListRelationFilter.schema'

const smartdevicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SmartDeviceWhereInputObjectSchema), z.lazy(() => SmartDeviceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SmartDeviceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SmartDeviceWhereInputObjectSchema), z.lazy(() => SmartDeviceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  internal_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserAccountScalarRelationFilterObjectSchema), z.lazy(() => UserAccountWhereInputObjectSchema)]).optional(),
  solves: z.lazy(() => SolveListRelationFilterObjectSchema).optional()
}).strict();
export const SmartDeviceWhereInputObjectSchema: z.ZodType<Prisma.SmartDeviceWhereInput> = smartdevicewhereinputSchema as unknown as z.ZodType<Prisma.SmartDeviceWhereInput>;
export const SmartDeviceWhereInputObjectZodSchema = smartdevicewhereinputSchema;
