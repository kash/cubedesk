import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeTypeCreateManyCreated_byInputObjectSchema as BadgeTypeCreateManyCreated_byInputObjectSchema } from './BadgeTypeCreateManyCreated_byInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BadgeTypeCreateManyCreated_byInputObjectSchema), z.lazy(() => BadgeTypeCreateManyCreated_byInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BadgeTypeCreateManyCreated_byInputEnvelopeObjectSchema: z.ZodType<Prisma.BadgeTypeCreateManyCreated_byInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BadgeTypeCreateManyCreated_byInputEnvelope>;
export const BadgeTypeCreateManyCreated_byInputEnvelopeObjectZodSchema = makeSchema();
