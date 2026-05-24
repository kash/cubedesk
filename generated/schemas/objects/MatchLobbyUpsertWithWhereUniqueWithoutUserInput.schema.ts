import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchLobbyWhereUniqueInputObjectSchema as MatchLobbyWhereUniqueInputObjectSchema } from './MatchLobbyWhereUniqueInput.schema';
import { MatchLobbyUpdateWithoutUserInputObjectSchema as MatchLobbyUpdateWithoutUserInputObjectSchema } from './MatchLobbyUpdateWithoutUserInput.schema';
import { MatchLobbyUncheckedUpdateWithoutUserInputObjectSchema as MatchLobbyUncheckedUpdateWithoutUserInputObjectSchema } from './MatchLobbyUncheckedUpdateWithoutUserInput.schema';
import { MatchLobbyCreateWithoutUserInputObjectSchema as MatchLobbyCreateWithoutUserInputObjectSchema } from './MatchLobbyCreateWithoutUserInput.schema';
import { MatchLobbyUncheckedCreateWithoutUserInputObjectSchema as MatchLobbyUncheckedCreateWithoutUserInputObjectSchema } from './MatchLobbyUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MatchLobbyUpdateWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => MatchLobbyCreateWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const MatchLobbyUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchLobbyUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyUpsertWithWhereUniqueWithoutUserInput>;
export const MatchLobbyUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
