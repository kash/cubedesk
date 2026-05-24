import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SmartDeviceUpdateManyMutationInputObjectSchema as SmartDeviceUpdateManyMutationInputObjectSchema } from './objects/SmartDeviceUpdateManyMutationInput.schema';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './objects/SmartDeviceWhereInput.schema';

export const SmartDeviceUpdateManySchema: z.ZodType<Prisma.SmartDeviceUpdateManyArgs> = z.object({ data: SmartDeviceUpdateManyMutationInputObjectSchema, where: SmartDeviceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SmartDeviceUpdateManyArgs>;

export const SmartDeviceUpdateManyZodSchema = z.object({ data: SmartDeviceUpdateManyMutationInputObjectSchema, where: SmartDeviceWhereInputObjectSchema.optional() }).strict();