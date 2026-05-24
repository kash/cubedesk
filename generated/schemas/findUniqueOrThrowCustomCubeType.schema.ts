import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeSelectObjectSchema as CustomCubeTypeSelectObjectSchema } from './objects/CustomCubeTypeSelect.schema';
import { CustomCubeTypeIncludeObjectSchema as CustomCubeTypeIncludeObjectSchema } from './objects/CustomCubeTypeInclude.schema';
import { CustomCubeTypeWhereUniqueInputObjectSchema as CustomCubeTypeWhereUniqueInputObjectSchema } from './objects/CustomCubeTypeWhereUniqueInput.schema';

export const CustomCubeTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.CustomCubeTypeFindUniqueOrThrowArgs> = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), where: CustomCubeTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeFindUniqueOrThrowArgs>;

export const CustomCubeTypeFindUniqueOrThrowZodSchema = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), where: CustomCubeTypeWhereUniqueInputObjectSchema }).strict();