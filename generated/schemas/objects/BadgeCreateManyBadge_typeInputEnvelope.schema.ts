import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BadgeCreateManyBadge_typeInputObjectSchema as BadgeCreateManyBadge_typeInputObjectSchema } from './BadgeCreateManyBadge_typeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BadgeCreateManyBadge_typeInputObjectSchema), z.lazy(() => BadgeCreateManyBadge_typeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BadgeCreateManyBadge_typeInputEnvelopeObjectSchema: z.ZodType<Prisma.BadgeCreateManyBadge_typeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BadgeCreateManyBadge_typeInputEnvelope>;
export const BadgeCreateManyBadge_typeInputEnvelopeObjectZodSchema = makeSchema();
