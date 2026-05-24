import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateManyUserInputObjectSchema as GameSessionCreateManyUserInputObjectSchema } from './GameSessionCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GameSessionCreateManyUserInputObjectSchema), z.lazy(() => GameSessionCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GameSessionCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.GameSessionCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateManyUserInputEnvelope>;
export const GameSessionCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
