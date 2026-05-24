import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbySelectObjectSchema as MatchLobbySelectObjectSchema } from './objects/MatchLobbySelect.schema';
import { MatchLobbyIncludeObjectSchema as MatchLobbyIncludeObjectSchema } from './objects/MatchLobbyInclude.schema';
import { MatchLobbyWhereUniqueInputObjectSchema as MatchLobbyWhereUniqueInputObjectSchema } from './objects/MatchLobbyWhereUniqueInput.schema';
import { MatchLobbyCreateInputObjectSchema as MatchLobbyCreateInputObjectSchema } from './objects/MatchLobbyCreateInput.schema';
import { MatchLobbyUncheckedCreateInputObjectSchema as MatchLobbyUncheckedCreateInputObjectSchema } from './objects/MatchLobbyUncheckedCreateInput.schema';
import { MatchLobbyUpdateInputObjectSchema as MatchLobbyUpdateInputObjectSchema } from './objects/MatchLobbyUpdateInput.schema';
import { MatchLobbyUncheckedUpdateInputObjectSchema as MatchLobbyUncheckedUpdateInputObjectSchema } from './objects/MatchLobbyUncheckedUpdateInput.schema';

export const MatchLobbyUpsertOneSchema: z.ZodType<Prisma.MatchLobbyUpsertArgs> = z.object({ select: MatchLobbySelectObjectSchema.optional(), include: MatchLobbyIncludeObjectSchema.optional(), where: MatchLobbyWhereUniqueInputObjectSchema, create: z.union([ MatchLobbyCreateInputObjectSchema, MatchLobbyUncheckedCreateInputObjectSchema ]), update: z.union([ MatchLobbyUpdateInputObjectSchema, MatchLobbyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.MatchLobbyUpsertArgs>;

export const MatchLobbyUpsertOneZodSchema = z.object({ select: MatchLobbySelectObjectSchema.optional(), include: MatchLobbyIncludeObjectSchema.optional(), where: MatchLobbyWhereUniqueInputObjectSchema, create: z.union([ MatchLobbyCreateInputObjectSchema, MatchLobbyUncheckedCreateInputObjectSchema ]), update: z.union([ MatchLobbyUpdateInputObjectSchema, MatchLobbyUncheckedUpdateInputObjectSchema ]) }).strict();