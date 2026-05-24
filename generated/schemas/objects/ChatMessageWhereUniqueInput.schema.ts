import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ChatMessageWhereUniqueInputObjectSchema: z.ZodType<Prisma.ChatMessageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatMessageWhereUniqueInput>;
export const ChatMessageWhereUniqueInputObjectZodSchema = makeSchema();
