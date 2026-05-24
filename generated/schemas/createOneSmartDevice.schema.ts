import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SmartDeviceSelectObjectSchema as SmartDeviceSelectObjectSchema } from './objects/SmartDeviceSelect.schema';
import { SmartDeviceIncludeObjectSchema as SmartDeviceIncludeObjectSchema } from './objects/SmartDeviceInclude.schema';
import { SmartDeviceCreateInputObjectSchema as SmartDeviceCreateInputObjectSchema } from './objects/SmartDeviceCreateInput.schema';
import { SmartDeviceUncheckedCreateInputObjectSchema as SmartDeviceUncheckedCreateInputObjectSchema } from './objects/SmartDeviceUncheckedCreateInput.schema';

export const SmartDeviceCreateOneSchema: z.ZodType<Prisma.SmartDeviceCreateArgs> = z.object({ select: SmartDeviceSelectObjectSchema.optional(), include: SmartDeviceIncludeObjectSchema.optional(), data: z.union([SmartDeviceCreateInputObjectSchema, SmartDeviceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SmartDeviceCreateArgs>;

export const SmartDeviceCreateOneZodSchema = z.object({ select: SmartDeviceSelectObjectSchema.optional(), include: SmartDeviceIncludeObjectSchema.optional(), data: z.union([SmartDeviceCreateInputObjectSchema, SmartDeviceUncheckedCreateInputObjectSchema]) }).strict();