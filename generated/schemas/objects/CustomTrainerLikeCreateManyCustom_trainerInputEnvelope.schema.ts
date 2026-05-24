import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeCreateManyCustom_trainerInputObjectSchema as CustomTrainerLikeCreateManyCustom_trainerInputObjectSchema } from './CustomTrainerLikeCreateManyCustom_trainerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomTrainerLikeCreateManyCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateManyCustom_trainerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomTrainerLikeCreateManyCustom_trainerInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCreateManyCustom_trainerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateManyCustom_trainerInputEnvelope>;
export const CustomTrainerLikeCreateManyCustom_trainerInputEnvelopeObjectZodSchema = makeSchema();
