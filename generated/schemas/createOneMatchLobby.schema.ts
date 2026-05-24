import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbySelectObjectSchema as MatchLobbySelectObjectSchema } from './objects/MatchLobbySelect.schema';
import { MatchLobbyIncludeObjectSchema as MatchLobbyIncludeObjectSchema } from './objects/MatchLobbyInclude.schema';
import { MatchLobbyCreateInputObjectSchema as MatchLobbyCreateInputObjectSchema } from './objects/MatchLobbyCreateInput.schema';
import { MatchLobbyUncheckedCreateInputObjectSchema as MatchLobbyUncheckedCreateInputObjectSchema } from './objects/MatchLobbyUncheckedCreateInput.schema';

export const MatchLobbyCreateOneSchema: z.ZodType<Prisma.MatchLobbyCreateArgs> = z.object({ select: MatchLobbySelectObjectSchema.optional(), include: MatchLobbyIncludeObjectSchema.optional(), data: z.union([MatchLobbyCreateInputObjectSchema, MatchLobbyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.MatchLobbyCreateArgs>;

export const MatchLobbyCreateOneZodSchema = z.object({ select: MatchLobbySelectObjectSchema.optional(), include: MatchLobbyIncludeObjectSchema.optional(), data: z.union([MatchLobbyCreateInputObjectSchema, MatchLobbyUncheckedCreateInputObjectSchema]) }).strict();