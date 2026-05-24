import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();
export const NullableFloatFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput>;
export const NullableFloatFieldUpdateOperationsInputObjectZodSchema = makeSchema();
