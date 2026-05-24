import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateManyUserInputObjectSchema as CustomTrainerCreateManyUserInputObjectSchema } from './CustomTrainerCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomTrainerCreateManyUserInputObjectSchema), z.lazy(() => CustomTrainerCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomTrainerCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomTrainerCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateManyUserInputEnvelope>;
export const CustomTrainerCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
