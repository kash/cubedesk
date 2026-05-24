import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeSelectObjectSchema as CustomCubeTypeSelectObjectSchema } from './objects/CustomCubeTypeSelect.schema';
import { CustomCubeTypeCreateManyInputObjectSchema as CustomCubeTypeCreateManyInputObjectSchema } from './objects/CustomCubeTypeCreateManyInput.schema';

export const CustomCubeTypeCreateManyAndReturnSchema: z.ZodType<Prisma.CustomCubeTypeCreateManyAndReturnArgs> = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), data: z.union([ CustomCubeTypeCreateManyInputObjectSchema, z.array(CustomCubeTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeCreateManyAndReturnArgs>;

export const CustomCubeTypeCreateManyAndReturnZodSchema = z.object({ select: CustomCubeTypeSelectObjectSchema.optional(), data: z.union([ CustomCubeTypeCreateManyInputObjectSchema, z.array(CustomCubeTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();