import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationCreateManyTriggering_userInputObjectSchema as NotificationCreateManyTriggering_userInputObjectSchema } from './NotificationCreateManyTriggering_userInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => NotificationCreateManyTriggering_userInputObjectSchema), z.lazy(() => NotificationCreateManyTriggering_userInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const NotificationCreateManyTriggering_userInputEnvelopeObjectSchema: z.ZodType<Prisma.NotificationCreateManyTriggering_userInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateManyTriggering_userInputEnvelope>;
export const NotificationCreateManyTriggering_userInputEnvelopeObjectZodSchema = makeSchema();
