import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateManyNew_trainerInputObjectSchema as CustomTrainerDownloadCreateManyNew_trainerInputObjectSchema } from './CustomTrainerDownloadCreateManyNew_trainerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomTrainerDownloadCreateManyNew_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateManyNew_trainerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomTrainerDownloadCreateManyNew_trainerInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateManyNew_trainerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateManyNew_trainerInputEnvelope>;
export const CustomTrainerDownloadCreateManyNew_trainerInputEnvelopeObjectZodSchema = makeSchema();
