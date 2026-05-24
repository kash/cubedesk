import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const smartdevicescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SmartDeviceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SmartDeviceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SmartDeviceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SmartDeviceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SmartDeviceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  internal_name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  device_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const SmartDeviceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SmartDeviceScalarWhereWithAggregatesInput> = smartdevicescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SmartDeviceScalarWhereWithAggregatesInput>;
export const SmartDeviceScalarWhereWithAggregatesInputObjectZodSchema = smartdevicescalarwherewithaggregatesinputSchema;
