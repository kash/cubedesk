import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const AdViewWhereUniqueInputObjectSchema: z.ZodType<Prisma.AdViewWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewWhereUniqueInput>;
export const AdViewWhereUniqueInputObjectZodSchema = makeSchema();
