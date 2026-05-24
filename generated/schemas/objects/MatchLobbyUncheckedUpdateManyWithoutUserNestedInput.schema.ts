import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchLobbyCreateWithoutUserInputObjectSchema as MatchLobbyCreateWithoutUserInputObjectSchema } from './MatchLobbyCreateWithoutUserInput.schema';
import { MatchLobbyUncheckedCreateWithoutUserInputObjectSchema as MatchLobbyUncheckedCreateWithoutUserInputObjectSchema } from './MatchLobbyUncheckedCreateWithoutUserInput.schema';
import { MatchLobbyCreateOrConnectWithoutUserInputObjectSchema as MatchLobbyCreateOrConnectWithoutUserInputObjectSchema } from './MatchLobbyCreateOrConnectWithoutUserInput.schema';
import { MatchLobbyUpsertWithWhereUniqueWithoutUserInputObjectSchema as MatchLobbyUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './MatchLobbyUpsertWithWhereUniqueWithoutUserInput.schema';
import { MatchLobbyCreateManyUserInputEnvelopeObjectSchema as MatchLobbyCreateManyUserInputEnvelopeObjectSchema } from './MatchLobbyCreateManyUserInputEnvelope.schema';
import { MatchLobbyWhereUniqueInputObjectSchema as MatchLobbyWhereUniqueInputObjectSchema } from './MatchLobbyWhereUniqueInput.schema';
import { MatchLobbyUpdateWithWhereUniqueWithoutUserInputObjectSchema as MatchLobbyUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './MatchLobbyUpdateWithWhereUniqueWithoutUserInput.schema';
import { MatchLobbyUpdateManyWithWhereWithoutUserInputObjectSchema as MatchLobbyUpdateManyWithWhereWithoutUserInputObjectSchema } from './MatchLobbyUpdateManyWithWhereWithoutUserInput.schema';
import { MatchLobbyScalarWhereInputObjectSchema as MatchLobbyScalarWhereInputObjectSchema } from './MatchLobbyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MatchLobbyCreateWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyCreateWithoutUserInputObjectSchema).array(), z.lazy(() => MatchLobbyUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MatchLobbyCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MatchLobbyUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MatchLobbyCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema), z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema), z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema), z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema), z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MatchLobbyUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MatchLobbyUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MatchLobbyScalarWhereInputObjectSchema), z.lazy(() => MatchLobbyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MatchLobbyUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.MatchLobbyUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyUncheckedUpdateManyWithoutUserNestedInput>;
export const MatchLobbyUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
