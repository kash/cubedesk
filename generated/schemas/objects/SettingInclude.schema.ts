import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomCubeTypeFindManySchema as CustomCubeTypeFindManySchema } from '../findManyCustomCubeType.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { SettingCountOutputTypeArgsObjectSchema as SettingCountOutputTypeArgsObjectSchema } from './SettingCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  custom_cube_types: z.union([z.boolean(), z.lazy(() => CustomCubeTypeFindManySchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SettingCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SettingIncludeObjectSchema: z.ZodType<Prisma.SettingInclude> = makeSchema() as unknown as z.ZodType<Prisma.SettingInclude>;
export const SettingIncludeObjectZodSchema = makeSchema();
