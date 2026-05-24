import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ImageWhereUniqueInputObjectSchema: z.ZodType<Prisma.ImageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageWhereUniqueInput>;
export const ImageWhereUniqueInputObjectZodSchema = makeSchema();
