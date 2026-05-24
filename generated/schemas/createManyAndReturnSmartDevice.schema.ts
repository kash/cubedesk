import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SmartDeviceSelectObjectSchema as SmartDeviceSelectObjectSchema } from './objects/SmartDeviceSelect.schema';
import { SmartDeviceCreateManyInputObjectSchema as SmartDeviceCreateManyInputObjectSchema } from './objects/SmartDeviceCreateManyInput.schema';

export const SmartDeviceCreateManyAndReturnSchema: z.ZodType<Prisma.SmartDeviceCreateManyAndReturnArgs> = z.object({ select: SmartDeviceSelectObjectSchema.optional(), data: z.union([ SmartDeviceCreateManyInputObjectSchema, z.array(SmartDeviceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SmartDeviceCreateManyAndReturnArgs>;

export const SmartDeviceCreateManyAndReturnZodSchema = z.object({ select: SmartDeviceSelectObjectSchema.optional(), data: z.union([ SmartDeviceCreateManyInputObjectSchema, z.array(SmartDeviceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();