import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeCreateManyCreatorInputObjectSchema as CustomTrainerLikeCreateManyCreatorInputObjectSchema } from './CustomTrainerLikeCreateManyCreatorInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomTrainerLikeCreateManyCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeCreateManyCreatorInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomTrainerLikeCreateManyCreatorInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCreateManyCreatorInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateManyCreatorInputEnvelope>;
export const CustomTrainerLikeCreateManyCreatorInputEnvelopeObjectZodSchema = makeSchema();
