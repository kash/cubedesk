import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipCreateManyFriendship_requestInputObjectSchema as FriendshipCreateManyFriendship_requestInputObjectSchema } from './FriendshipCreateManyFriendship_requestInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FriendshipCreateManyFriendship_requestInputObjectSchema), z.lazy(() => FriendshipCreateManyFriendship_requestInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FriendshipCreateManyFriendship_requestInputEnvelopeObjectSchema: z.ZodType<Prisma.FriendshipCreateManyFriendship_requestInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyFriendship_requestInputEnvelope>;
export const FriendshipCreateManyFriendship_requestInputEnvelopeObjectZodSchema = makeSchema();
