import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  username: z.string().optional(),
  stripe_customer_id: z.string().optional()
}).strict();
export const UserAccountWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserAccountWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAccountWhereUniqueInput>;
export const UserAccountWhereUniqueInputObjectZodSchema = makeSchema();
