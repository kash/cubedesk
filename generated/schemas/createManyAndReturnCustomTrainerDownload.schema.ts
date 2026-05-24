import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerDownloadSelectObjectSchema as CustomTrainerDownloadSelectObjectSchema } from './objects/CustomTrainerDownloadSelect.schema';
import { CustomTrainerDownloadCreateManyInputObjectSchema as CustomTrainerDownloadCreateManyInputObjectSchema } from './objects/CustomTrainerDownloadCreateManyInput.schema';

export const CustomTrainerDownloadCreateManyAndReturnSchema: z.ZodType<Prisma.CustomTrainerDownloadCreateManyAndReturnArgs> = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), data: z.union([ CustomTrainerDownloadCreateManyInputObjectSchema, z.array(CustomTrainerDownloadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateManyAndReturnArgs>;

export const CustomTrainerDownloadCreateManyAndReturnZodSchema = z.object({ select: CustomTrainerDownloadSelectObjectSchema.optional(), data: z.union([ CustomTrainerDownloadCreateManyInputObjectSchema, z.array(CustomTrainerDownloadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();