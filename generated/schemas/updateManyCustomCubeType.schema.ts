import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeUpdateManyMutationInputObjectSchema as CustomCubeTypeUpdateManyMutationInputObjectSchema } from './objects/CustomCubeTypeUpdateManyMutationInput.schema';
import { CustomCubeTypeWhereInputObjectSchema as CustomCubeTypeWhereInputObjectSchema } from './objects/CustomCubeTypeWhereInput.schema';

export const CustomCubeTypeUpdateManySchema: z.ZodType<Prisma.CustomCubeTypeUpdateManyArgs> = z.object({ data: CustomCubeTypeUpdateManyMutationInputObjectSchema, where: CustomCubeTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeUpdateManyArgs>;

export const CustomCubeTypeUpdateManyZodSchema = z.object({ data: CustomCubeTypeUpdateManyMutationInputObjectSchema, where: CustomCubeTypeWhereInputObjectSchema.optional() }).strict();