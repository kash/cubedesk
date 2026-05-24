import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ImageCreateManyUserInputObjectSchema as ImageCreateManyUserInputObjectSchema } from './ImageCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ImageCreateManyUserInputObjectSchema), z.lazy(() => ImageCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ImageCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ImageCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateManyUserInputEnvelope>;
export const ImageCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
