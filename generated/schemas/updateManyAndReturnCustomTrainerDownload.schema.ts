import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerDownloadSelectObjectSchema as CustomTrainerDownloadSelectObjectSchema } from './objects/CustomTrainerDownloadSelect.schema';
import { CustomTrainerDownloadUpdateManyMutationInputObjectSchema as CustomTrainerDownloadUpdateManyMutationInputObjectSchema } from './objects/CustomTrainerDownloadUpdateManyMutationInput.schema';
import { CustomTrainerDownloadWhereInputObjectSchema as CustomTrainerDownloadWhereInputObjectSchema } from './objects/CustomTrainerDownloadWhereInput.schema';

export const CustomTrainerDownloadUpdateManyAndReturnSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateManyAndReturnArgs> = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), data: CustomTrainerDownloadUpdateManyMutationInputObjectSchema, where: CustomTrainerDownloadWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateManyAndReturnArgs>;

export const CustomTrainerDownloadUpdateManyAndReturnZodSchema = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), data: CustomTrainerDownloadUpdateManyMutationInputObjectSchema, where: CustomTrainerDownloadWhereInputObjectSchema.optional() }).strict();