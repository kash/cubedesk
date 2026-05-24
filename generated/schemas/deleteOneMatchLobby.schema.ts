import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbySelectObjectSchema as MatchLobbySelectObjectSchema } from './objects/MatchLobbySelect.schema';
import { MatchLobbyIncludeObjectSchema as MatchLobbyIncludeObjectSchema } from './objects/MatchLobbyInclude.schema';
import { MatchLobbyWhereUniqueInputObjectSchema as MatchLobbyWhereUniqueInputObjectSchema } from './objects/MatchLobbyWhereUniqueInput.schema';

export const MatchLobbyDeleteOneSchema: z.ZodType<Prisma.MatchLobbyDeleteArgs> = z.object({ select: MatchLobbySelectObjectSchema.optional(), include: MatchLobbyIncludeObjectSchema.optional(), where: MatchLobbyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MatchLobbyDeleteArgs>;

export const MatchLobbyDeleteOneZodSchema = z.object({ select: MatchLobbySelectObjectSchema.optional(), include: MatchLobbyIncludeObjectSchema.optional(), where: MatchLobbyWhereUniqueInputObjectSchema }).strict();