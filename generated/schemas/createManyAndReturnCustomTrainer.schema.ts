import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerSelectObjectSchema as CustomTrainerSelectObjectSchema } from './objects/CustomTrainerSelect.schema';
import { CustomTrainerCreateManyInputObjectSchema as CustomTrainerCreateManyInputObjectSchema } from './objects/CustomTrainerCreateManyInput.schema';

export const CustomTrainerCreateManyAndReturnSchema: z.ZodType<Prisma.CustomTrainerCreateManyAndReturnArgs> = z.object({ select: CustomTrainerSelectObjectSchema.optional(), data: z.union([ CustomTrainerCreateManyInputObjectSchema, z.array(CustomTrainerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerCreateManyAndReturnArgs>;

export const CustomTrainerCreateManyAndReturnZodSchema = z.object({ select: CustomTrainerSelectObjectSchema.optional(), data: z.union([ CustomTrainerCreateManyInputObjectSchema, z.array(CustomTrainerCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();