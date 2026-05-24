import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchLobbyWhereUniqueInputObjectSchema as MatchLobbyWhereUniqueInputObjectSchema } from './MatchLobbyWhereUniqueInput.schema';
import { MatchLobbyCreateWithoutUserInputObjectSchema as MatchLobbyCreateWithoutUserInputObjectSchema } from './MatchLobbyCreateWithoutUserInput.schema';
import { MatchLobbyUncheckedCreateWithoutUserInputObjectSchema as MatchLobbyUncheckedCreateWithoutUserInputObjectSchema } from './MatchLobbyUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchLobbyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MatchLobbyCreateWithoutUserInputObjectSchema), z.lazy(() => MatchLobbyUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const MatchLobbyCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchLobbyCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyCreateOrConnectWithoutUserInput>;
export const MatchLobbyCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
