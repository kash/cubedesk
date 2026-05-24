import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.coerce.date().optional()
}).strict();
export const DateTimeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput>;
export const DateTimeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
