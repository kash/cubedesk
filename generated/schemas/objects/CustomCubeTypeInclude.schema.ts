import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingArgsObjectSchema as SettingArgsObjectSchema } from './SettingArgs.schema'

const makeSchema = () => z.object({
  setting: z.union([z.boolean(), z.lazy(() => SettingArgsObjectSchema)]).optional()
}).strict();
export const CustomCubeTypeIncludeObjectSchema: z.ZodType<Prisma.CustomCubeTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.CustomCubeTypeInclude>;
export const CustomCubeTypeIncludeObjectZodSchema = makeSchema();
