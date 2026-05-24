import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeSelectObjectSchema as CustomCubeTypeSelectObjectSchema } from './objects/CustomCubeTypeSelect.schema';
import { CustomCubeTypeIncludeObjectSchema as CustomCubeTypeIncludeObjectSchema } from './objects/CustomCubeTypeInclude.schema';
import { CustomCubeTypeUpdateInputObjectSchema as CustomCubeTypeUpdateInputObjectSchema } from './objects/CustomCubeTypeUpdateInput.schema';
import { CustomCubeTypeUncheckedUpdateInputObjectSchema as CustomCubeTypeUncheckedUpdateInputObjectSchema } from './objects/CustomCubeTypeUncheckedUpdateInput.schema';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './objects/CustomCubeTypeWhereUniqueInput.schema';

export const CustomCubeTypeUpdateOneSchema: z.ZodType<Prisma.CustomCubeTypeUpdateArgs> = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), data: z.union([CustomCubeTypeUpdateInputObjectSchema, CustomCubeTypeUncheckedUpdateInputObjectSchema]), where: CustomCubeTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeUpdateArgs>;

export const CustomCubeTypeUpdateOneZodSchema = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), data: z.union([CustomCubeTypeUpdateInputObjectSchema, CustomCubeTypeUncheckedUpdateInputObjectSchema]), where: CustomCubeTypeWhereUniqueInputObjectSchema }).strict();