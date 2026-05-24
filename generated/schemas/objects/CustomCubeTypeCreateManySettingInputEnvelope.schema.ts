import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeCreateManySettingInputObjectSchema as CustomCubeTypeCreateManySettingInputObjectSchema } from './CustomCubeTypeCreateManySettingInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomCubeTypeCreateManySettingInputObjectSchema), z.lazy(() => CustomCubeTypeCreateManySettingInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomCubeTypeCreateManySettingInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomCubeTypeCreateManySettingInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeCreateManySettingInputEnvelope>;
export const CustomCubeTypeCreateManySettingInputEnvelopeObjectZodSchema = makeSchema();
