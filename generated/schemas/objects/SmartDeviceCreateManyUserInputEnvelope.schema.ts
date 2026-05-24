import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SmartDeviceCreateManyUserInputObjectSchema as SmartDeviceCreateManyUserInputObjectSchema } from './SmartDeviceCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SmartDeviceCreateManyUserInputObjectSchema), z.lazy(() => SmartDeviceCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SmartDeviceCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.SmartDeviceCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SmartDeviceCreateManyUserInputEnvelope>;
export const SmartDeviceCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
