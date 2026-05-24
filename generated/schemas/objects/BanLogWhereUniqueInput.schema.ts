import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const BanLogWhereUniqueInputObjectSchema: z.ZodType<Prisma.BanLogWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogWhereUniqueInput>;
export const BanLogWhereUniqueInputObjectZodSchema = makeSchema();
