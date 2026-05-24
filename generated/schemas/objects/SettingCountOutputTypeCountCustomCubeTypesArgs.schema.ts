import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeWhereInputObjectSchema as CustomCubeTypeWhereInputObjectSchema } from './CustomCubeTypeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomCubeTypeWhereInputObjectSchema).optional()
}).strict();
export const SettingCountOutputTypeCountCustomCubeTypesArgsObjectSchema = makeSchema();
export const SettingCountOutputTypeCountCustomCubeTypesArgsObjectZodSchema = makeSchema();
