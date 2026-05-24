import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationPreferenceWhereInputObjectSchema as NotificationPreferenceWhereInputObjectSchema } from './NotificationPreferenceWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => NotificationPreferenceWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => NotificationPreferenceWhereInputObjectSchema).optional().nullable()
}).strict();
export const NotificationPreferenceNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.NotificationPreferenceNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.NotificationPreferenceNullableScalarRelationFilter>;
export const NotificationPreferenceNullableScalarRelationFilterObjectZodSchema = makeSchema();
