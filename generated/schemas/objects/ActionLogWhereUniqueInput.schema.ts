import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ActionLogWhereUniqueInputObjectSchema: z.ZodType<Prisma.ActionLogWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogWhereUniqueInput>;
export const ActionLogWhereUniqueInputObjectZodSchema = makeSchema();
