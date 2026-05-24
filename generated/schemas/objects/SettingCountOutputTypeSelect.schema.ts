import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingCountOutputTypeCountCustomCubeTypesArgsObjectSchema as SettingCountOutputTypeCountCustomCubeTypesArgsObjectSchema } from './SettingCountOutputTypeCountCustomCubeTypesArgs.schema'

const makeSchema = () => z.object({
  custom_cube_types: z.union([z.boolean(), z.lazy(() => SettingCountOutputTypeCountCustomCubeTypesArgsObjectSchema)]).optional()
}).strict();
export const SettingCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SettingCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SettingCountOutputTypeSelect>;
export const SettingCountOutputTypeSelectObjectZodSchema = makeSchema();
