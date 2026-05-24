import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateManyCopy_ofInputObjectSchema as CustomTrainerCreateManyCopy_ofInputObjectSchema } from './CustomTrainerCreateManyCopy_ofInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomTrainerCreateManyCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerCreateManyCopy_ofInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomTrainerCreateManyCopy_ofInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomTrainerCreateManyCopy_ofInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateManyCopy_ofInputEnvelope>;
export const CustomTrainerCreateManyCopy_ofInputEnvelopeObjectZodSchema = makeSchema();
