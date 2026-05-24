import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SettingWhereInputObjectSchema as SettingWhereInputObjectSchema } from './SettingWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SettingWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => SettingWhereInputObjectSchema).optional().nullable()
}).strict();
export const SettingNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.SettingNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SettingNullableScalarRelationFilter>;
export const SettingNullableScalarRelationFilterObjectZodSchema = makeSchema();
