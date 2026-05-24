import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerDownloadSelectObjectSchema as CustomTrainerDownloadSelectObjectSchema } from './objects/CustomTrainerDownloadSelect.schema';
import { CustomTrainerDownloadIncludeObjectSchema as CustomTrainerDownloadIncludeObjectSchema } from './objects/CustomTrainerDownloadInclude.schema';
import { CustomTrainerDownloadCreateInputObjectSchema as CustomTrainerDownloadCreateInputObjectSchema } from './objects/CustomTrainerDownloadCreateInput.schema';
import { CustomTrainerDownloadUncheckedCreateInputObjectSchema as CustomTrainerDownloadUncheckedCreateInputObjectSchema } from './objects/CustomTrainerDownloadUncheckedCreateInput.schema';

export const CustomTrainerDownloadCreateOneSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateArgs> = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), include: CustomTrainerDownloadIncludeObjectSchema.optional(), data: z.union([CustomTrainerDownloadCreateInputObjectSchema, CustomTrainerDownloadUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateArgs>;

export const CustomTrainerDownloadCreateOneZodSchema = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), include: CustomTrainerDownloadIncludeObjectSchema.optional(), data: z.union([CustomTrainerDownloadCreateInputObjectSchema, CustomTrainerDownloadUncheckedCreateInputObjectSchema]) }).strict();