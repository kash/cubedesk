import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './SmartDeviceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SmartDeviceWhereInputObjectSchema).optional(),
  some: z.lazy(() => SmartDeviceWhereInputObjectSchema).optional(),
  none: z.lazy(() => SmartDeviceWhereInputObjectSchema).optional()
}).strict();
export const SmartDeviceListRelationFilterObjectSchema: z.ZodType<Prisma.SmartDeviceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceListRelationFilter>;
export const SmartDeviceListRelationFilterObjectZodSchema = makeSchema();
