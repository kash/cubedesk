import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingCountOutputTypeSelectObjectSchema as SettingCountOutputTypeSelectObjectSchema } from './SettingCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SettingCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SettingCountOutputTypeArgsObjectSchema = makeSchema();
export const SettingCountOutputTypeArgsObjectZodSchema = makeSchema();
