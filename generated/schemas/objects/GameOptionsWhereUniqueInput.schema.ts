import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  game_session_id: z.string().optional(),
  match_session_id: z.string().optional()
}).strict();
export const GameOptionsWhereUniqueInputObjectSchema: z.ZodType<Prisma.GameOptionsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.GameOptionsWhereUniqueInput>;
export const GameOptionsWhereUniqueInputObjectZodSchema = makeSchema();
