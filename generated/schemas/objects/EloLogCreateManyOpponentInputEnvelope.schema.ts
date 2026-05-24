import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogCreateManyOpponentInputObjectSchema as EloLogCreateManyOpponentInputObjectSchema } from './EloLogCreateManyOpponentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EloLogCreateManyOpponentInputObjectSchema), z.lazy(() => EloLogCreateManyOpponentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EloLogCreateManyOpponentInputEnvelopeObjectSchema: z.ZodType<Prisma.EloLogCreateManyOpponentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EloLogCreateManyOpponentInputEnvelope>;
export const EloLogCreateManyOpponentInputEnvelopeObjectZodSchema = makeSchema();
