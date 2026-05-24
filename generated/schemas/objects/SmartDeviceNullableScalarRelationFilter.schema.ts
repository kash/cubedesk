import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './SmartDeviceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SmartDeviceWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => SmartDeviceWhereInputObjectSchema).optional().nullable()
}).strict();
export const SmartDeviceNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.SmartDeviceNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceNullableScalarRelationFilter>;
export const SmartDeviceNullableScalarRelationFilterObjectZodSchema = makeSchema();
