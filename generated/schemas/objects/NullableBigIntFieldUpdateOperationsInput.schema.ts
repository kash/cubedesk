import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();
export const NullableBigIntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableBigIntFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableBigIntFieldUpdateOperationsInput>;
export const NullableBigIntFieldUpdateOperationsInputObjectZodSchema = makeSchema();
