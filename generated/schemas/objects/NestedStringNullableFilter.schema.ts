import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const nestedstringnullablefilterSchema = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  search: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedStringNullableFilterObjectSchema: z.ZodType<Prisma.NestedStringNullableFilter> = nestedstringnullablefilterSchema as unknown as z.ZodType<Prisma.NestedStringNullableFilter>;
export const NestedStringNullableFilterObjectZodSchema = nestedstringnullablefilterSchema;
