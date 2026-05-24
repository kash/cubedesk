import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerCreateManyInputObjectSchema as CustomTrainerCreateManyInputObjectSchema } from './objects/CustomTrainerCreateManyInput.schema';

export const CustomTrainerCreateManySchema: z.ZodType<Prisma.CustomTrainerCreateManyArgs> = z.object({ data: z.union([ CustomTrainerCreateManyInputObjectSchema, z.array(CustomTrainerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerCreateManyArgs>;

export const CustomTrainerCreateManyZodSchema = z.object({ data: z.union([ CustomTrainerCreateManyInputObjectSchema, z.array(CustomTrainerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();