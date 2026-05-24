import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerDownloadCreateManyInputObjectSchema as CustomTrainerDownloadCreateManyInputObjectSchema } from './objects/CustomTrainerDownloadCreateManyInput.schema';

export const CustomTrainerDownloadCreateManySchema: z.ZodType<Prisma.CustomTrainerDownloadCreateManyArgs> = z.object({ data: z.union([ CustomTrainerDownloadCreateManyInputObjectSchema, z.array(CustomTrainerDownloadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDownloadCreateManyArgs>;

export const CustomTrainerDownloadCreateManyZodSchema = z.object({ data: z.union([ CustomTrainerDownloadCreateManyInputObjectSchema, z.array(CustomTrainerDownloadCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();