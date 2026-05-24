import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { CustomCubeTypeCreateManyInputObjectSchema as CustomCubeTypeCreateManyInputObjectSchema } from './objects/CustomCubeTypeCreateManyInput.schema';

export const CustomCubeTypeCreateManySchema: z.ZodType<Prisma.CustomCubeTypeCreateManyArgs> = z.object({ data: z.union([ CustomCubeTypeCreateManyInputObjectSchema, z.array(CustomCubeTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.CustomCubeTypeCreateManyArgs>;

export const CustomCubeTypeCreateManyZodSchema = z.object({ data: z.union([ CustomCubeTypeCreateManyInputObjectSchema, z.array(CustomCubeTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();