import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ActionLogCreateManyUserInputObjectSchema as ActionLogCreateManyUserInputObjectSchema } from './ActionLogCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActionLogCreateManyUserInputObjectSchema), z.lazy(() => ActionLogCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActionLogCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ActionLogCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogCreateManyUserInputEnvelope>;
export const ActionLogCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
