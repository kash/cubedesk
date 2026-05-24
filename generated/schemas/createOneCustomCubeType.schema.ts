import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeSelectObjectSchema as CustomCubeTypeSelectObjectSchema } from './objects/CustomCubeTypeSelect.schema';
import { CustomCubeTypeIncludeObjectSchema as CustomCubeTypeIncludeObjectSchema } from './objects/CustomCubeTypeInclude.schema';
import { CustomCubeTypeCreateInputObjectSchema as CustomCubeTypeCreateInputObjectSchema } from './objects/CustomCubeTypeCreateInput.schema';
import { CustomCubeTypeUncheckedCreateInputObjectSchema as CustomCubeTypeUncheckedCreateInputObjectSchema } from './objects/CustomCubeTypeUncheckedCreateInput.schema';

export const CustomCubeTypeCreateOneSchema: z.ZodType<Prisma.CustomCubeTypeCreateArgs> = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), data: z.union([CustomCubeTypeCreateInputObjectSchema, CustomCubeTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeCreateArgs>;

export const CustomCubeTypeCreateOneZodSchema = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), include: CustomCubeTypeIncludeObjectSchema.optional(), data: z.union([CustomCubeTypeCreateInputObjectSchema, CustomCubeTypeUncheckedCreateInputObjectSchema]) }).strict();