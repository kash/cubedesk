import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeSelectObjectSchema as CustomCubeTypeSelectObjectSchema } from './CustomCubeTypeSelect.schema';
import { CustomCubeTypeIncludeObjectSchema as CustomCubeTypeIncludeObjectSchema } from './CustomCubeTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CustomCubeTypeSelectObjectSchema).optional(),
  include: z.lazy(() => CustomCubeTypeIncludeObjectSchema).optional()
}).strict();
export const CustomCubeTypeArgsObjectSchema = makeSchema();
export const CustomCubeTypeArgsObjectZodSchema = makeSchema();
