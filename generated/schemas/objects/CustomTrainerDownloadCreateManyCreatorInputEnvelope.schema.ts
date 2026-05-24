import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadCreateManyCreatorInputObjectSchema as CustomTrainerDownloadCreateManyCreatorInputObjectSchema } from './CustomTrainerDownloadCreateManyCreatorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomTrainerDownloadCreateManyCreatorInputObjectSchema), z.lazy(() => CustomTrainerDownloadCreateManyCreatorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomTrainerDownloadCreateManyCreatorInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateManyCreatorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateManyCreatorInputEnvelope>;
export const CustomTrainerDownloadCreateManyCreatorInputEnvelopeObjectZodSchema = makeSchema();
