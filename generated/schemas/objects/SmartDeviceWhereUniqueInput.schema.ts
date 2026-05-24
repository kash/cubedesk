import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const SmartDeviceWhereUniqueInputObjectSchema: z.ZodType<Prisma.SmartDeviceWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceWhereUniqueInput>;
export const SmartDeviceWhereUniqueInputObjectZodSchema = makeSchema();
