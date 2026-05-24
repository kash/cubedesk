import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbySelectObjectSchema as MatchLobbySelectObjectSchema } from './objects/MatchLobbySelect.schema';
import { MatchLobbyIncludeObjectSchema as MatchLobbyIncludeObjectSchema } from './objects/MatchLobbyInclude.schema';
import { MatchLobbyUpdateInputObjectSchema as MatchLobbyUpdateInputObjectSchema } from './objects/MatchLobbyUpdateInput.schema';
import { MatchLobbyUncheckedUpdateInputObjectSchema as MatchLobbyUncheckedUpdateInputObjectSchema } from './objects/MatchLobbyUncheckedUpdateInput.schema';
import { MatchLobbyWhereUniqueInputObjectSchema as MatchLobbyWhereUniqueInputObjectSchema } from './objects/MatchLobbyWhereUniqueInput.schema';

export const MatchLobbyUpdateOneSchema: z.ZodType<Prisma.MatchLobbyUpdateArgs> = z.object({ select: MatchLobbySelectObjectSchema.optional(), include: MatchLobbyIncludeObjectSchema.optional(), data: z.union([MatchLobbyUpdateInputObjectSchema, MatchLobbyUncheckedUpdateInputObjectSchema]), where: MatchLobbyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.MatchLobbyUpdateArgs>;

export const MatchLobbyUpdateOneZodSchema = z.object({ select: MatchLobbySelectObjectSchema.optional(), include: MatchLobbyIncludeObjectSchema.optional(), data: z.union([MatchLobbyUpdateInputObjectSchema, MatchLobbyUncheckedUpdateInputObjectSchema]), where: MatchLobbyWhereUniqueInputObjectSchema }).strict();