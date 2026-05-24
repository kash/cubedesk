import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GameSessionCreateManyMatchInputObjectSchema as GameSessionCreateManyMatchInputObjectSchema } from './GameSessionCreateManyMatchInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GameSessionCreateManyMatchInputObjectSchema), z.lazy(() => GameSessionCreateManyMatchInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GameSessionCreateManyMatchInputEnvelopeObjectSchema: z.ZodType<Prisma.GameSessionCreateManyMatchInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionCreateManyMatchInputEnvelope>;
export const GameSessionCreateManyMatchInputEnvelopeObjectZodSchema = makeSchema();
