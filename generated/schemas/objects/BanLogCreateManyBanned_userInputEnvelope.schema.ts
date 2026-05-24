import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogCreateManyBanned_userInputObjectSchema as BanLogCreateManyBanned_userInputObjectSchema } from './BanLogCreateManyBanned_userInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => BanLogCreateManyBanned_userInputObjectSchema), z.lazy(() => BanLogCreateManyBanned_userInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const BanLogCreateManyBanned_userInputEnvelopeObjectSchema: z.ZodType<Prisma.BanLogCreateManyBanned_userInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateManyBanned_userInputEnvelope>;
export const BanLogCreateManyBanned_userInputEnvelopeObjectZodSchema = makeSchema();
