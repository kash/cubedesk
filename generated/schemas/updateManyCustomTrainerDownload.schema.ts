import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerDownloadUpdateManyMutationInputObjectSchema as CustomTrainerDownloadUpdateManyMutationInputObjectSchema } from './objects/CustomTrainerDownloadUpdateManyMutationInput.schema';
import { CustomTrainerDownloadWhereInputObjectSchema as CustomTrainerDownloadWhereInputObjectSchema } from './objects/CustomTrainerDownloadWhereInput.schema';

export const CustomTrainerDownloadUpdateManySchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateManyArgs> = z.object({ data: CustomTrainerDownloadUpdateManyMutationInputObjectSchema, where: CustomTrainerDownloadWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateManyArgs>;

export const CustomTrainerDownloadUpdateManyZodSchema = z.object({ data: CustomTrainerDownloadUpdateManyMutationInputObjectSchema, where: CustomTrainerDownloadWhereInputObjectSchema.optional() }).strict();