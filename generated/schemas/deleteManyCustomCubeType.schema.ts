import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeWhereInputObjectSchema as CustomCubeTypeWhereInputObjectSchema } from './objects/CustomCubeTypeWhereInput.schema';

export const CustomCubeTypeDeleteManySchema: z.ZodType<Prisma.CustomCubeTypeDeleteManyArgs> = z.object({ where: CustomCubeTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeDeleteManyArgs>;

export const CustomCubeTypeDeleteManyZodSchema = z.object({ where: CustomCubeTypeWhereInputObjectSchema.optional() }).strict();