import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCreateManyTo_userInputObjectSchema as FriendshipRequestCreateManyTo_userInputObjectSchema } from './FriendshipRequestCreateManyTo_userInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FriendshipRequestCreateManyTo_userInputObjectSchema), z.lazy(() => FriendshipRequestCreateManyTo_userInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FriendshipRequestCreateManyTo_userInputEnvelopeObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateManyTo_userInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateManyTo_userInputEnvelope>;
export const FriendshipRequestCreateManyTo_userInputEnvelopeObjectZodSchema = makeSchema();
