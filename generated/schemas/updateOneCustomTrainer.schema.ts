import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerSelectObjectSchema as CustomTrainerSelectObjectSchema } from './objects/CustomTrainerSelect.schema';
import { CustomTrainerIncludeObjectSchema as CustomTrainerIncludeObjectSchema } from './objects/CustomTrainerInclude.schema';
import { CustomTrainerUpdateInputObjectSchema as CustomTrainerUpdateInputObjectSchema } from './objects/CustomTrainerUpdateInput.schema';
import { CustomTrainerUncheckedUpdateInputObjectSchema as CustomTrainerUncheckedUpdateInputObjectSchema } from './objects/CustomTrainerUncheckedUpdateInput.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './objects/CustomTrainerWhereUniqueInput.schema';

export const CustomTrainerUpdateOneSchema: z.ZodType<Prisma.CustomTrainerUpdateArgs> = z.object({ select: CustomTrainerSelectObjectSchema.optional(), include: CustomTrainerIncludeObjectSchema.optional(), data: z.union([CustomTrainerUpdateInputObjectSchema, CustomTrainerUncheckedUpdateInputObjectSchema]), where: CustomTrainerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomTrainerUpdateArgs>;

export const CustomTrainerUpdateOneZodSchema = z.object({ select: CustomTrainerSelectObjectSchema.optional(), include: CustomTrainerIncludeObjectSchema.optional(), data: z.union([CustomTrainerUpdateInputObjectSchema, CustomTrainerUncheckedUpdateInputObjectSchema]), where: CustomTrainerWhereUniqueInputObjectSchema }).strict();