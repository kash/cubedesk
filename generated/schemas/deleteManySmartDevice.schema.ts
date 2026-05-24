import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './objects/SmartDeviceWhereInput.schema';

export const SmartDeviceDeleteManySchema: z.ZodType<Prisma.SmartDeviceDeleteManyArgs> = z.object({ where: SmartDeviceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SmartDeviceDeleteManyArgs>;

export const SmartDeviceDeleteManyZodSchema = z.object({ where: SmartDeviceWhereInputObjectSchema.optional() }).strict();