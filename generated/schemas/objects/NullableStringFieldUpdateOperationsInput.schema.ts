import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.string().optional()
}).strict();
export const NullableStringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput>;
export const NullableStringFieldUpdateOperationsInputObjectZodSchema = makeSchema();
