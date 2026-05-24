import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCreateManyFrom_userInputObjectSchema as FriendshipRequestCreateManyFrom_userInputObjectSchema } from './FriendshipRequestCreateManyFrom_userInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FriendshipRequestCreateManyFrom_userInputObjectSchema), z.lazy(() => FriendshipRequestCreateManyFrom_userInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FriendshipRequestCreateManyFrom_userInputEnvelopeObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateManyFrom_userInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateManyFrom_userInputEnvelope>;
export const FriendshipRequestCreateManyFrom_userInputEnvelopeObjectZodSchema = makeSchema();
