import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerDownloadSelectObjectSchema as CustomTrainerDownloadSelectObjectSchema } from './objects/CustomTrainerDownloadSelect.schema';
import { CustomTrainerDownloadIncludeObjectSchema as CustomTrainerDownloadIncludeObjectSchema } from './objects/CustomTrainerDownloadInclude.schema';
import { CustomTrainerDownloadWhereUniqueInputObjectSchema as CustomTrainerDownloadWhereUniqueInputObjectSchema } from './objects/CustomTrainerDownloadWhereUniqueInput.schema';
import { CustomTrainerDownloadCreateInputObjectSchema as CustomTrainerDownloadCreateInputObjectSchema } from './objects/CustomTrainerDownloadCreateInput.schema';
import { CustomTrainerDownloadUncheckedCreateInputObjectSchema as CustomTrainerDownloadUncheckedCreateInputObjectSchema } from './objects/CustomTrainerDownloadUncheckedCreateInput.schema';
import { CustomTrainerDownloadUpdateInputObjectSchema as CustomTrainerDownloadUpdateInputObjectSchema } from './objects/CustomTrainerDownloadUpdateInput.schema';
import { CustomTrainerDownloadUncheckedUpdateInputObjectSchema as CustomTrainerDownloadUncheckedUpdateInputObjectSchema } from './objects/CustomTrainerDownloadUncheckedUpdateInput.schema';

export const CustomTrainerDownloadUpsertOneSchema: z.ZodType<Prisma.CustomTrainerDownloadUpsertArgs> = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), include: CustomTrainerDownloadIncludeObjectSchema.optional(), where: CustomTrainerDownloadWhereUniqueInputObjectSchema, create: z.union([ CustomTrainerDownloadCreateInputObjectSchema, CustomTrainerDownloadUncheckedCreateInputObjectSchema ]), update: z.union([ CustomTrainerDownloadUpdateInputObjectSchema, CustomTrainerDownloadUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDownloadUpsertArgs>;

export const CustomTrainerDownloadUpsertOneZodSchema = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), include: CustomTrainerDownloadIncludeObjectSchema.optional(), where: CustomTrainerDownloadWhereUniqueInputObjectSchema, create: z.union([ CustomTrainerDownloadCreateInputObjectSchema, CustomTrainerDownloadUncheckedCreateInputObjectSchema ]), update: z.union([ CustomTrainerDownloadUpdateInputObjectSchema, CustomTrainerDownloadUncheckedUpdateInputObjectSchema ]) }).strict();