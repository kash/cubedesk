import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchLobbyScalarWhereInputObjectSchema as MatchLobbyScalarWhereInputObjectSchema } from './MatchLobbyScalarWhereInput.schema';
import { MatchLobbyUpdateManyMutationInputObjectSchema as MatchLobbyUpdateManyMutationInputObjectSchema } from './MatchLobbyUpdateManyMutationInput.schema';
import { MatchLobbyUncheckedUpdateManyWithoutUserInputObjectSchema as MatchLobbyUncheckedUpdateManyWithoutUserInputObjectSchema } from './MatchLobbyUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MatchLobbyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MatchLobbyUpdateManyMutationInputObjectSchema), z.lazy(() => MatchLobbyUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const MatchLobbyUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.MatchLobbyUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyUpdateManyWithWhereWithoutUserInput>;
export const MatchLobbyUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
