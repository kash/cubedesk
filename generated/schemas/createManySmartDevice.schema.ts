import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { SmartDeviceCreateManyInputObjectSchema as SmartDeviceCreateManyInputObjectSchema } from './objects/SmartDeviceCreateManyInput.schema';

export const SmartDeviceCreateManySchema: z.ZodType<Prisma.SmartDeviceCreateManyArgs> = z.object({ data: z.union([ SmartDeviceCreateManyInputObjectSchema, z.array(SmartDeviceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SmartDeviceCreateManyArgs>;

export const SmartDeviceCreateManyZodSchema = z.object({ data: z.union([ SmartDeviceCreateManyInputObjectSchema, z.array(SmartDeviceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();