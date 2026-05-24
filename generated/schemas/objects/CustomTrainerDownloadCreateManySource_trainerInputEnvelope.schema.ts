import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateManySource_trainerInputObjectSchema as CustomTrainerDownloadCreateManySource_trainerInputObjectSchema } from './CustomTrainerDownloadCreateManySource_trainerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomTrainerDownloadCreateManySource_trainerInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateManySource_trainerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomTrainerDownloadCreateManySource_trainerInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateManySource_trainerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateManySource_trainerInputEnvelope>;
export const CustomTrainerDownloadCreateManySource_trainerInputEnvelopeObjectZodSchema = makeSchema();
