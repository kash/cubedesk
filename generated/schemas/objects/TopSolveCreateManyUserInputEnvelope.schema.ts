import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveCreateManyUserInputObjectSchema as TopSolveCreateManyUserInputObjectSchema } from './TopSolveCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TopSolveCreateManyUserInputObjectSchema), z.lazy(() => TopSolveCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TopSolveCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.TopSolveCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveCreateManyUserInputEnvelope>;
export const TopSolveCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
