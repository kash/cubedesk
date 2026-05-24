import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const EloLogWhereUniqueInputObjectSchema: z.ZodType<Prisma.EloLogWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EloLogWhereUniqueInput>;
export const EloLogWhereUniqueInputObjectZodSchema = makeSchema();
