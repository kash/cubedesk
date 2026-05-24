import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerSelectObjectSchema as CustomTrainerSelectObjectSchema } from './objects/CustomTrainerSelect.schema';
import { CustomTrainerIncludeObjectSchema as CustomTrainerIncludeObjectSchema } from './objects/CustomTrainerInclude.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './objects/CustomTrainerWhereUniqueInput.schema';

export const CustomTrainerDeleteOneSchema: z.ZodType<Prisma.CustomTrainerDeleteArgs> = z.object({ select: CustomTrainerSelectObjectSchema.optional(), include: CustomTrainerIncludeObjectSchema.optional(), where: CustomTrainerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomTrainerDeleteArgs>;

export const CustomTrainerDeleteOneZodSchema = z.object({ select: CustomTrainerSelectObjectSchema.optional(), include: CustomTrainerIncludeObjectSchema.optional(), where: CustomTrainerWhereUniqueInputObjectSchema }).strict();