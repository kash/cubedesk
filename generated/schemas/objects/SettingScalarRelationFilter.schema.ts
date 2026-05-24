import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './SettingWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SettingWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SettingWhereInputObjectSchema).optional()
}).strict();
export const SettingScalarRelationFilterObjectSchema: z.ZodType<Prisma.SettingScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SettingScalarRelationFilter>;
export const SettingScalarRelationFilterObjectZodSchema = makeSchema();
