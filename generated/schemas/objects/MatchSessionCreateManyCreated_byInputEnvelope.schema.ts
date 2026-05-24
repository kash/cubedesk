import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCreateManyCreated_byInputObjectSchema as MatchSessionCreateManyCreated_byInputObjectSchema } from './MatchSessionCreateManyCreated_byInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MatchSessionCreateManyCreated_byInputObjectSchema), z.lazy(() => MatchSessionCreateManyCreated_byInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MatchSessionCreateManyCreated_byInputEnvelopeObjectSchema: z.ZodType<Prisma.MatchSessionCreateManyCreated_byInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionCreateManyCreated_byInputEnvelope>;
export const MatchSessionCreateManyCreated_byInputEnvelopeObjectZodSchema = makeSchema();
