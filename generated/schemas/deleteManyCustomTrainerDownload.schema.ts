import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerDownloadWhereInputObjectSchema as CustomTrainerDownloadWhereInputObjectSchema } from './objects/CustomTrainerDownloadWhereInput.schema';

export const CustomTrainerDownloadDeleteManySchema: z.ZodType<Prisma.CustomTrainerDownloadDeleteManyArgs> = z.object({ where: CustomTrainerDownloadWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDownloadDeleteManyArgs>;

export const CustomTrainerDownloadDeleteManyZodSchema = z.object({ where: CustomTrainerDownloadWhereInputObjectSchema.optional() }).strict();