import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.number().int().optional(),
  increment: z.number().int().optional(),
  decrement: z.number().int().optional(),
  multiply: z.number().int().optional(),
  divide: z.number().int().optional()
}).strict();
export const IntFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.IntFieldUpdateOperationsInput>;
export const IntFieldUpdateOperationsInputObjectZodSchema = makeSchema();
