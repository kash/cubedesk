import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const MatchLobbyWhereUniqueInputObjectSchema: z.ZodType<Prisma.MatchLobbyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchLobbyWhereUniqueInput>;
export const MatchLobbyWhereUniqueInputObjectZodSchema = makeSchema();
