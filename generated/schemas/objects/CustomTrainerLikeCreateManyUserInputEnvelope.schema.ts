import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeCreateManyUserInputObjectSchema as CustomTrainerLikeCreateManyUserInputObjectSchema } from './CustomTrainerLikeCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomTrainerLikeCreateManyUserInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomTrainerLikeCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateManyUserInputEnvelope>;
export const CustomTrainerLikeCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
