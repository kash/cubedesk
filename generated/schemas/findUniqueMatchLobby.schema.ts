import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbySelectObjectSchema as MatchLobbySelectObjectSchema } from './objects/MatchLobbySelect.schema';
import { MatchLobbyIncludeObjectSchema as MatchLobbyIncludeObjectSchema } from './objects/MatchLobbyInclude.schema';
import { MatchLobbyWhereUniqueInputObjectSchema as MatchLobbyWhereUniqueInputObjectSchema } from './objects/MatchLobbyWhereUniqueInput.schema';

export const MatchLobbyFindUniqueSchema: z.ZodType<Prisma.MatchLobbyFindUniqueArgs> = z.object({ select: MatchLobbySelectObjectSchema.optional(), include: MatchLobbyIncludeObjectSchema.optional(), where: MatchLobbyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MatchLobbyFindUniqueArgs>;

export const MatchLobbyFindUniqueZodSchema = z.object({ select: MatchLobbySelectObjectSchema.optional(), include: MatchLobbyIncludeObjectSchema.optional(), where: MatchLobbyWhereUniqueInputObjectSchema }).strict();