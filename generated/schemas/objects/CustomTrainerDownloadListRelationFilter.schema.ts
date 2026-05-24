import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerDownloadWhereInputObjectSchema as CustomTrainerDownloadWhereInputObjectSchema } from './CustomTrainerDownloadWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CustomTrainerDownloadWhereInputObjectSchema).optional(),
  some: z.lazy(() => CustomTrainerDownloadWhereInputObjectSchema).optional(),
  none: z.lazy(() => CustomTrainerDownloadWhereInputObjectSchema).optional()
}).strict();
export const CustomTrainerDownloadListRelationFilterObjectSchema: z.ZodType<Prisma.CustomTrainerDownloadListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerDownloadListRelationFilter>;
export const CustomTrainerDownloadListRelationFilterObjectZodSchema = makeSchema();
