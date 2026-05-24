import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeWhereInputObjectSchema as CustomCubeTypeWhereInputObjectSchema } from './CustomCubeTypeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CustomCubeTypeWhereInputObjectSchema).optional(),
  some: z.lazy(() => CustomCubeTypeWhereInputObjectSchema).optional(),
  none: z.lazy(() => CustomCubeTypeWhereInputObjectSchema).optional()
}).strict();
export const CustomCubeTypeListRelationFilterObjectSchema: z.ZodType<Prisma.CustomCubeTypeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeListRelationFilter>;
export const CustomCubeTypeListRelationFilterObjectZodSchema = makeSchema();
