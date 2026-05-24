import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomTrainerSelectObjectSchema as CustomTrainerSelectObjectSchema } from './objects/CustomTrainerSelect.schema';
import { CustomTrainerIncludeObjectSchema as CustomTrainerIncludeObjectSchema } from './objects/CustomTrainerInclude.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './objects/CustomTrainerWhereUniqueInput.schema';

export const CustomTrainerFindUniqueOrThrowSchema: z.ZodType<Prisma.CustomTrainerFindUniqueOrThrowArgs> = z.object({ select: CustomTrainerSelectObjectSchema.optional(), include: CustomTrainerIncludeObjectSchema.optional(), where: CustomTrainerWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomTrainerFindUniqueOrThrowArgs>;

export const CustomTrainerFindUniqueOrThrowZodSchema = z.object({ select: CustomTrainerSelectObjectSchema.optional(), include: CustomTrainerIncludeObjectSchema.optional(), where: CustomTrainerWhereUniqueInputObjectSchema }).strict();