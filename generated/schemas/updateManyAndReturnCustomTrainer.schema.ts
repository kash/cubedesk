import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerSelectObjectSchema as CustomTrainerSelectObjectSchema } from './objects/CustomTrainerSelect.schema';
import { CustomTrainerUpdateManyMutationInputObjectSchema as CustomTrainerUpdateManyMutationInputObjectSchema } from './objects/CustomTrainerUpdateManyMutationInput.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './objects/CustomTrainerWhereInput.schema';

export const CustomTrainerUpdateManyAndReturnSchema: z.ZodType<Prisma.CustomTrainerUpdateManyAndReturnArgs> = z.object({ select: CustomTrainerSelectObjectSchema.optional(), data: CustomTrainerUpdateManyMutationInputObjectSchema, where: CustomTrainerWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomTrainerUpdateManyAndReturnArgs>;

export const CustomTrainerUpdateManyAndReturnZodSchema = z.object({ select: CustomTrainerSelectObjectSchema.optional(), data: CustomTrainerUpdateManyMutationInputObjectSchema, where: CustomTrainerWhereInputObjectSchema.optional() }).strict();