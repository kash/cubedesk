import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateManyOther_userInputObjectSchema as FriendshipCreateManyOther_userInputObjectSchema } from './FriendshipCreateManyOther_userInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FriendshipCreateManyOther_userInputObjectSchema), z.lazy(() => FriendshipCreateManyOther_userInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FriendshipCreateManyOther_userInputEnvelopeObjectSchema: z.ZodType<Prisma.FriendshipCreateManyOther_userInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyOther_userInputEnvelope>;
export const FriendshipCreateManyOther_userInputEnvelopeObjectZodSchema = makeSchema();
