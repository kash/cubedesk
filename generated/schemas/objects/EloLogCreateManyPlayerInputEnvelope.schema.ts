import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogCreateManyPlayerInputObjectSchema as EloLogCreateManyPlayerInputObjectSchema } from './EloLogCreateManyPlayerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EloLogCreateManyPlayerInputObjectSchema), z.lazy(() => EloLogCreateManyPlayerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EloLogCreateManyPlayerInputEnvelopeObjectSchema: z.ZodType<Prisma.EloLogCreateManyPlayerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EloLogCreateManyPlayerInputEnvelope>;
export const EloLogCreateManyPlayerInputEnvelopeObjectZodSchema = makeSchema();
