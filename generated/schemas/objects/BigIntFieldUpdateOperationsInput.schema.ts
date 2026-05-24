import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();
export const BigIntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.BigIntFieldUpdateOperationsInput>;
export const BigIntFieldUpdateOperationsInputObjectZodSchema = makeSchema();
