import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './objects/CustomTrainerWhereInput.schema';

export const CustomTrainerDeleteManySchema: z.ZodType<Prisma.CustomTrainerDeleteManyArgs> = z.object({ where: CustomTrainerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDeleteManyArgs>;

export const CustomTrainerDeleteManyZodSchema = z.object({ where: CustomTrainerWhereInputObjectSchema.optional() }).strict();