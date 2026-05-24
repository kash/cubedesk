import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateManyUserInputObjectSchema as CustomTrainerDownloadCreateManyUserInputObjectSchema } from './CustomTrainerDownloadCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomTrainerDownloadCreateManyUserInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomTrainerDownloadCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateManyUserInputEnvelope>;
export const CustomTrainerDownloadCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
