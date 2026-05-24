import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogCreateManyMatchInputObjectSchema as EloLogCreateManyMatchInputObjectSchema } from './EloLogCreateManyMatchInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EloLogCreateManyMatchInputObjectSchema), z.lazy(() => EloLogCreateManyMatchInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EloLogCreateManyMatchInputEnvelopeObjectSchema: z.ZodType<Prisma.EloLogCreateManyMatchInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EloLogCreateManyMatchInputEnvelope>;
export const EloLogCreateManyMatchInputEnvelopeObjectZodSchema = makeSchema();
