import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerUpdateManyMutationInputObjectSchema as CustomTrainerUpdateManyMutationInputObjectSchema } from './objects/CustomTrainerUpdateManyMutationInput.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './objects/CustomTrainerWhereInput.schema';

export const CustomTrainerUpdateManySchema: z.ZodType<Prisma.CustomTrainerUpdateManyArgs> = z.object({ data: CustomTrainerUpdateManyMutationInputObjectSchema, where: CustomTrainerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerUpdateManyArgs>;

export const CustomTrainerUpdateManyZodSchema = z.object({ data: CustomTrainerUpdateManyMutationInputObjectSchema, where: CustomTrainerWhereInputObjectSchema.optional() }).strict();