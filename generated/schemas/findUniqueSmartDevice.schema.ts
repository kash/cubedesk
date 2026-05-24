import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SmartDeviceSelectObjectSchema as SmartDeviceSelectObjectSchema } from './objects/SmartDeviceSelect.schema';
import { SmartDeviceIncludeObjectSchema as SmartDeviceIncludeObjectSchema } from './objects/SmartDeviceInclude.schema';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './objects/SmartDeviceWhereUniqueInput.schema';

export const SmartDeviceFindUniqueSchema: z.ZodType<Prisma.SmartDeviceFindUniqueArgs> = z.object({ select: SmartDeviceSelectObjectSchema.optional(), include: SmartDeviceIncludeObjectSchema.optional(), where: SmartDeviceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SmartDeviceFindUniqueArgs>;

export const SmartDeviceFindUniqueZodSchema = z.object({ select: SmartDeviceSelectObjectSchema.optional(), include: SmartDeviceIncludeObjectSchema.optional(), where: SmartDeviceWhereUniqueInputObjectSchema }).strict();