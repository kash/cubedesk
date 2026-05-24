import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbyCreateManyInputObjectSchema as MatchLobbyCreateManyInputObjectSchema } from './objects/MatchLobbyCreateManyInput.schema';

export const MatchLobbyCreateManySchema: z.ZodType<Prisma.MatchLobbyCreateManyArgs> = z.object({ data: z.union([ MatchLobbyCreateManyInputObjectSchema, z.array(MatchLobbyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.MatchLobbyCreateManyArgs>;

export const MatchLobbyCreateManyZodSchema = z.object({ data: z.union([ MatchLobbyCreateManyInputObjectSchema, z.array(MatchLobbyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();