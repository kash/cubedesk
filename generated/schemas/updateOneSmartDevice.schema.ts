import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SmartDeviceSelectObjectSchema as SmartDeviceSelectObjectSchema } from './objects/SmartDeviceSelect.schema';
import { SmartDeviceIncludeObjectSchema as SmartDeviceIncludeObjectSchema } from './objects/SmartDeviceInclude.schema';
import { SmartDeviceUpdateInputObjectSchema as SmartDeviceUpdateInputObjectSchema } from './objects/SmartDeviceUpdateInput.schema';
import { SmartDeviceUncheckedUpdateInputObjectSchema as SmartDeviceUncheckedUpdateInputObjectSchema } from './objects/SmartDeviceUncheckedUpdateInput.schema';
import { SmartDeviceWhereUniqueInputObjectSchema as SmartDeviceWhereUniqueInputObjectSchema } from './objects/SmartDeviceWhereUniqueInput.schema';

export const SmartDeviceUpdateOneSchema: z.ZodType<Prisma.SmartDeviceUpdateArgs> = z.object({ select: SmartDeviceSelectObjectSchema.optional(), include: SmartDeviceIncludeObjectSchema.optional(), data: z.union([SmartDeviceUpdateInputObjectSchema, SmartDeviceUncheckedUpdateInputObjectSchema]), where: SmartDeviceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SmartDeviceUpdateArgs>;

export const SmartDeviceUpdateOneZodSchema = z.object({ select: SmartDeviceSelectObjectSchema.optional(), include: SmartDeviceIncludeObjectSchema.optional(), data: z.union([SmartDeviceUpdateInputObjectSchema, SmartDeviceUncheckedUpdateInputObjectSchema]), where: SmartDeviceWhereUniqueInputObjectSchema }).strict();