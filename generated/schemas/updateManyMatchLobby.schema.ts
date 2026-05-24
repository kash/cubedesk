import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbyUpdateManyMutationInputObjectSchema as MatchLobbyUpdateManyMutationInputObjectSchema } from './objects/MatchLobbyUpdateManyMutationInput.schema';
import { MatchLobbyWhereInputObjectSchema as MatchLobbyWhereInputObjectSchema } from './objects/MatchLobbyWhereInput.schema';

export const MatchLobbyUpdateManySchema: z.ZodType<Prisma.MatchLobbyUpdateManyArgs> = z.object({ data: MatchLobbyUpdateManyMutationInputObjectSchema, where: MatchLobbyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchLobbyUpdateManyArgs>;

export const MatchLobbyUpdateManyZodSchema = z.object({ data: MatchLobbyUpdateManyMutationInputObjectSchema, where: MatchLobbyWhereInputObjectSchema.optional() }).strict();