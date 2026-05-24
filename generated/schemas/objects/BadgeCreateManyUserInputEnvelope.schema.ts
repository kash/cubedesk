import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeCreateManyUserInputObjectSchema as BadgeCreateManyUserInputObjectSchema } from './BadgeCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BadgeCreateManyUserInputObjectSchema), z.lazy(() => BadgeCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BadgeCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.BadgeCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BadgeCreateManyUserInputEnvelope>;
export const BadgeCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
