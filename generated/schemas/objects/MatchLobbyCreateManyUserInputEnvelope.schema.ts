import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchLobbyCreateManyUserInputObjectSchema as MatchLobbyCreateManyUserInputObjectSchema } from './MatchLobbyCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MatchLobbyCreateManyUserInputObjectSchema), z.lazy(() => MatchLobbyCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MatchLobbyCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.MatchLobbyCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyCreateManyUserInputEnvelope>;
export const MatchLobbyCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
