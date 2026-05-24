import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const smartdevicescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SmartDeviceScalarWhereInputObjectSchema), z.lazy(() => SmartDeviceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SmartDeviceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SmartDeviceScalarWhereInputObjectSchema), z.lazy(() => SmartDeviceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  internal_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  device_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const SmartDeviceScalarWhereInputObjectSchema: z.ZodType<Prisma.SmartDeviceScalarWhereInput> = smartdevicescalarwhereinputSchema as unknown as z.ZodType<Prisma.SmartDeviceScalarWhereInput>;
export const SmartDeviceScalarWhereInputObjectZodSchema = smartdevicescalarwhereinputSchema;
