import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SmartDeviceSelectObjectSchema as SmartDeviceSelectObjectSchema } from './objects/SmartDeviceSelect.schema';
import { SmartDeviceUpdateManyMutationInputObjectSchema as SmartDeviceUpdateManyMutationInputObjectSchema } from './objects/SmartDeviceUpdateManyMutationInput.schema';
import { SmartDeviceWhereInputObjectSchema as SmartDeviceWhereInputObjectSchema } from './objects/SmartDeviceWhereInput.schema';

export const SmartDeviceUpdateManyAndReturnSchema: z.ZodType<Prisma.SmartDeviceUpdateManyAndReturnArgs> = z.object({ select: SmartDeviceSelectObjectSchema.optional(), data: SmartDeviceUpdateManyMutationInputObjectSchema, where: SmartDeviceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SmartDeviceUpdateManyAndReturnArgs>;

export const SmartDeviceUpdateManyAndReturnZodSchema = z.object({ select: SmartDeviceSelectObjectSchema.optional(), data: SmartDeviceUpdateManyMutationInputObjectSchema, where: SmartDeviceWhereInputObjectSchema.optional() }).strict();