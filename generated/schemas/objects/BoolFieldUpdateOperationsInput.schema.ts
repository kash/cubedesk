import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.boolean().optional()
}).strict();
export const BoolFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.BoolFieldUpdateOperationsInput>;
export const BoolFieldUpdateOperationsInputObjectZodSchema = makeSchema();
