import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TrainerFavoriteCreateManyUserInputObjectSchema as TrainerFavoriteCreateManyUserInputObjectSchema } from './TrainerFavoriteCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TrainerFavoriteCreateManyUserInputObjectSchema), z.lazy(() => TrainerFavoriteCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TrainerFavoriteCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.TrainerFavoriteCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteCreateManyUserInputEnvelope>;
export const TrainerFavoriteCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
