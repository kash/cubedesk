import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const MatchSessionWhereUniqueInputObjectSchema: z.ZodType<Prisma.MatchSessionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchSessionWhereUniqueInput>;
export const MatchSessionWhereUniqueInputObjectZodSchema = makeSchema();
