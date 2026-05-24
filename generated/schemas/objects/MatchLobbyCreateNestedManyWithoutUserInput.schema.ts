import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchLobbyCreateWithoutUserInputObjectSchema as MatchLobbyCreateWithoutUserInputObjectSchema } from './MatchLobbyCreateWithoutUserInput.schema';
import { MatchLobbyUncheckedCreateWithoutUserInputObjectSchema as MatchLobbyUncheckedCreateWithoutUserInputObjectSchema } from './MatchLobbyUncheckedCreateWithoutUserInput.schema';
import { MatchLobbyCreateOrConnectWithoutUserInputObjectSchema as MatchLobbyCreateOrConnectWithoutUserInputObjectSchema } from './MatchLobbyCreateOrConnectWithoutUserInput.schema';
import { MatchLobbyCreateManyUserInputEnvelopeObjectSchema as MatchLobbyCreateManyUserInputEnvelopeObjectSchema } from './MatchLobbyCreateManyUserInputEnvelope.schema';
import { MatchLobbyWhereUniqueInputObjectSchema as MatchLobbyWhereUniqueInputObjectSchema } from './MatchLobbyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchLobbyCreateWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyCreateWithoutUserInputObjectSchema).array(), z.lazy(() => MatchLobbyUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchLobbyCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchLobbyCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema), z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MatchLobbyCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchLobbyCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyCreateNestedManyWithoutUserInput>;
export const MatchLobbyCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
