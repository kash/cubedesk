import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerDownloadSelectObjectSchema as CustomTrainerDownloadSelectObjectSchema } from './objects/CustomTrainerDownloadSelect.schema';
import { CustomTrainerDownloadIncludeObjectSchema as CustomTrainerDownloadIncludeObjectSchema } from './objects/CustomTrainerDownloadInclude.schema';
import { CustomTrainerDownloadUpdateInputObjectSchema as CustomTrainerDownloadUpdateInputObjectSchema } from './objects/CustomTrainerDownloadUpdateInput.schema';
import { CustomTrainerDownloadUncheckedUpdateInputObjectSchema as CustomTrainerDownloadUncheckedUpdateInputObjectSchema } from './objects/CustomTrainerDownloadUncheckedUpdateInput.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './objects/CustomTrainerDownloadWhereUniqueInput.schema';

export const CustomTrainerDownloadUpdateOneSchema: z.ZodType<Prisma.CustomTrainerDownloadUpdateArgs> = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), include: CustomTrainerDownloadIncludeObjectSchema.optional(), data: z.union([CustomTrainerDownloadUpdateInputObjectSchema, CustomTrainerDownloadUncheckedUpdateInputObjectSchema]), where: CustomTrainerDownloadWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpdateArgs>;

export const CustomTrainerDownloadUpdateOneZodSchema = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), include: CustomTrainerDownloadIncludeObjectSchema.optional(), data: z.union([CustomTrainerDownloadUpdateInputObjectSchema, CustomTrainerDownloadUncheckedUpdateInputObjectSchema]), where: CustomTrainerDownloadWhereUniqueInputObjectSchema }).strict();