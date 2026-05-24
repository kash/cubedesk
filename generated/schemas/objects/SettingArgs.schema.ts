import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingSelectObjectSchema as SettingSelectObjectSchema } from './SettingSelect.schema';
import { SettingIncludeObjectSchema as SettingIncludeObjectSchema } from './SettingInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SettingSelectObjectSchema).optional(),
  include: z.lazy(() => SettingIncludeObjectSchema).optional()
}).strict();
export const SettingArgsObjectSchema = makeSchema();
export const SettingArgsObjectZodSchema = makeSchema();
