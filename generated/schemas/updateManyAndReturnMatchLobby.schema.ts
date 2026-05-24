import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbySelectObjectSchema as MatchLobbySelectObjectSchema } from './objects/MatchLobbySelect.schema';
import { MatchLobbyUpdateManyMutationInputObjectSchema as MatchLobbyUpdateManyMutationInputObjectSchema } from './objects/MatchLobbyUpdateManyMutationInput.schema';
import { MatchLobbyWhereInputObjectSchema as MatchLobbyWhereInputObjectSchema } from './objects/MatchLobbyWhereInput.schema';

export const MatchLobbyUpdateManyAndReturnSchema: z.ZodType<Prisma.MatchLobbyUpdateManyAndReturnArgs> = z.object({ select: MatchLobbySelectObjectSchema.optional(), data: MatchLobbyUpdateManyMutationInputObjectSchema, where: MatchLobbyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchLobbyUpdateManyAndReturnArgs>;

export const MatchLobbyUpdateManyAndReturnZodSchema = z.object({ select: MatchLobbySelectObjectSchema.optional(), data: MatchLobbyUpdateManyMutationInputObjectSchema, where: MatchLobbyWhereInputObjectSchema.optional() }).strict();