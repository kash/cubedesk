import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeSelectObjectSchema as CustomCubeTypeSelectObjectSchema } from './objects/CustomCubeTypeSelect.schema';
import { CustomCubeTypeIncludeObjectSchema as CustomCubeTypeIncludeObjectSchema } from './objects/CustomCubeTypeInclude.schema';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './objects/CustomCubeTypeWhereUniqueInput.schema';

export const CustomCubeTypeFindUniqueSchema: z.ZodType<Prisma.CustomCubeTypeFindUniqueArgs> = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), where: CustomCubeTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeFindUniqueArgs>;

export const CustomCubeTypeFindUniqueZodSchema = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), where: CustomCubeTypeWhereUniqueInputObjectSchema }).strict();