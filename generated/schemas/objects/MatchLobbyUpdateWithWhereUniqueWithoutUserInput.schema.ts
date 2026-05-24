import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchLobbyWhereUniqueInputObjectSchema as MatchLobbyWhereUniqueInputObjectSchema } from './MatchLobbyWhereUniqueInput.schema';
import { MatchLobbyUpdateWithoutUserInputObjectSchema as MatchLobbyUpdateWithoutUserInputObjectSchema } from './MatchLobbyUpdateWithoutUserInput.schema';
import { MatchLobbyUncheckedUpdateWithoutUserInputObjectSchema as MatchLobbyUncheckedUpdateWithoutUserInputObjectSchema } from './MatchLobbyUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MatchLobbyUpdateWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const MatchLobbyUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchLobbyUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyUpdateWithWhereUniqueWithoutUserInput>;
export const MatchLobbyUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
