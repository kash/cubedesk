import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeSelectObjectSchema as CustomCubeTypeSelectObjectSchema } from './objects/CustomCubeTypeSelect.schema';
import { CustomCubeTypeUpdateManyMutationInputObjectSchema as CustomCubeTypeUpdateManyMutationInputObjectSchema } from './objects/CustomCubeTypeUpdateManyMutationInput.schema';
import { CustomCubeTypeWhereInputObjectSchema as CustomCubeTypeWhereInputObjectSchema } from './objects/CustomCubeTypeWhereInput.schema';

export const CustomCubeTypeUpdateManyAndReturnSchema: z.ZodType<Prisma.CustomCubeTypeUpdateManyAndReturnArgs> = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), data: CustomCubeTypeUpdateManyMutationInputObjectSchema, where: CustomCubeTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeUpdateManyAndReturnArgs>;

export const CustomCubeTypeUpdateManyAndReturnZodSchema = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), data: CustomCubeTypeUpdateManyMutationInputObjectSchema, where: CustomCubeTypeWhereInputObjectSchema.optional() }).strict();