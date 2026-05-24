import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerDownloadSelectObjectSchema as CustomTrainerDownloadSelectObjectSchema } from './objects/CustomTrainerDownloadSelect.schema';
import { CustomTrainerDownloadIncludeObjectSchema as CustomTrainerDownloadIncludeObjectSchema } from './objects/CustomTrainerDownloadInclude.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './objects/CustomTrainerDownloadWhereUniqueInput.schema';

export const CustomTrainerDownloadDeleteOneSchema: z.ZodType<Prisma.CustomTrainerDownloadDeleteArgs> = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), include: CustomTrainerDownloadIncludeObjectSchema.optional(), where: CustomTrainerDownloadWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDownloadDeleteArgs>;

export const CustomTrainerDownloadDeleteOneZodSchema = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), include: CustomTrainerDownloadIncludeObjectSchema.optional(), where: CustomTrainerDownloadWhereUniqueInputObjectSchema }).strict();