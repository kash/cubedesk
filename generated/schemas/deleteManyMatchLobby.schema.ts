import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MatchLobbyWhereInputObjectSchema as MatchLobbyWhereInputObjectSchema } from './objects/MatchLobbyWhereInput.schema';

export const MatchLobbyDeleteManySchema: z.ZodType<Prisma.MatchLobbyDeleteManyArgs> = z.object({ where: MatchLobbyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.MatchLobbyDeleteManyArgs>;

export const MatchLobbyDeleteManyZodSchema = z.object({ where: MatchLobbyWhereInputObjectSchema.optional() }).strict();