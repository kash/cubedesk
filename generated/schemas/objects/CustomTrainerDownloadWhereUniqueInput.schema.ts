import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const CustomTrainerDownloadWhereUniqueInputObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadWhereUniqueInput>;
export const CustomTrainerDownloadWhereUniqueInputObjectZodSchema = makeSchema();
