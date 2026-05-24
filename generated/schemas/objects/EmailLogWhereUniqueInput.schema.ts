import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const EmailLogWhereUniqueInputObjectSchema: z.ZodType<Prisma.EmailLogWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogWhereUniqueInput>;
export const EmailLogWhereUniqueInputObjectZodSchema = makeSchema();
