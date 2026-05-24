import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutSessionInputObjectSchema as SolveUpdateWithoutSessionInputObjectSchema } from './SolveUpdateWithoutSessionInput.schema';
import { SolveUncheckedUpdateWithoutSessionInputObjectSchema as SolveUncheckedUpdateWithoutSessionInputObjectSchema } from './SolveUncheckedUpdateWithoutSessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SolveUpdateWithoutSessionInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutSessionInputObjectSchema)])
}).strict();
export const SolveUpdateWithWhereUniqueWithoutSessionInputObjectSchema: z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateWithWhereUniqueWithoutSessionInput>;
export const SolveUpdateWithWhereUniqueWithoutSessionInputObjectZodSchema = makeSchema();
