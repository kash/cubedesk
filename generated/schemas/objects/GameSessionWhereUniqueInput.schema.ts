import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const GameSessionWhereUniqueInputObjectSchema: z.ZodType<Prisma.GameSessionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionWhereUniqueInput>;
export const GameSessionWhereUniqueInputObjectZodSchema = makeSchema();
