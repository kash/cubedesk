import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogCreateManyCreated_byInputObjectSchema as BanLogCreateManyCreated_byInputObjectSchema } from './BanLogCreateManyCreated_byInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BanLogCreateManyCreated_byInputObjectSchema), z.lazy(() => BanLogCreateManyCreated_byInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BanLogCreateManyCreated_byInputEnvelopeObjectSchema: z.ZodType<Prisma.BanLogCreateManyCreated_byInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateManyCreated_byInputEnvelope>;
export const BanLogCreateManyCreated_byInputEnvelopeObjectZodSchema = makeSchema();
