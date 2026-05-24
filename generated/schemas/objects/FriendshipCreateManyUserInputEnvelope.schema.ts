import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateManyUserInputObjectSchema as FriendshipCreateManyUserInputObjectSchema } from './FriendshipCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FriendshipCreateManyUserInputObjectSchema), z.lazy(() => FriendshipCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FriendshipCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.FriendshipCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyUserInputEnvelope>;
export const FriendshipCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
