import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  link_code: z.string().optional(),
  spectate_code: z.string().optional()
}).strict();
export const MatchWhereUniqueInputObjectSchema: z.ZodType<Prisma.MatchWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MatchWhereUniqueInput>;
export const MatchWhereUniqueInputObjectZodSchema = makeSchema();
