import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ForgotPasswordWhereUniqueInputObjectSchema: z.ZodType<Prisma.ForgotPasswordWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordWhereUniqueInput>;
export const ForgotPasswordWhereUniqueInputObjectZodSchema = makeSchema();
