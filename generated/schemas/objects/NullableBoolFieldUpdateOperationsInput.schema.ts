import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.boolean().optional()
}).strict();
export const NullableBoolFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput>;
export const NullableBoolFieldUpdateOperationsInputObjectZodSchema = makeSchema();
