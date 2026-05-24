import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbySelectObjectSchema as MatchLobbySelectObjectSchema } from './objects/MatchLobbySelect.schema';
import { MatchLobbyCreateManyInputObjectSchema as MatchLobbyCreateManyInputObjectSchema } from './objects/MatchLobbyCreateManyInput.schema';

export const MatchLobbyCreateManyAndReturnSchema: z.ZodType<Prisma.MatchLobbyCreateManyAndReturnArgs> = z.object({ select: MatchLobbySelectObjectSchema.optional(), data: z.union([ MatchLobbyCreateManyInputObjectSchema, z.array(MatchLobbyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MatchLobbyCreateManyAndReturnArgs>;

export const MatchLobbyCreateManyAndReturnZodSchema = z.object({ select: MatchLobbySelectObjectSchema.optional(), data: z.union([ MatchLobbyCreateManyInputObjectSchema, z.array(MatchLobbyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();