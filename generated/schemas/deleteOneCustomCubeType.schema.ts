import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeSelectObjectSchema as CustomCubeTypeSelectObjectSchema } from './objects/CustomCubeTypeSelect.schema';
import { CustomCubeTypeIncludeObjectSchema as CustomCubeTypeIncludeObjectSchema } from './objects/CustomCubeTypeInclude.schema';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './objects/CustomCubeTypeWhereUniqueInput.schema';

export const CustomCubeTypeDeleteOneSchema: z.ZodType<Prisma.CustomCubeTypeDeleteArgs> = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), where: CustomCubeTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeDeleteArgs>;

export const CustomCubeTypeDeleteOneZodSchema = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), where: CustomCubeTypeWhereUniqueInputObjectSchema }).strict();