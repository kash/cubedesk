import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './TopSolveWhereUniqueInput.schema';
import { TopSolveUpdateWithoutSolveInputObjectSchema as TopSolveUpdateWithoutSolveInputObjectSchema } from './TopSolveUpdateWithoutSolveInput.schema';
import { TopSolveUncheckedUpdateWithoutSolveInputObjectSchema as TopSolveUncheckedUpdateWithoutSolveInputObjectSchema } from './TopSolveUncheckedUpdateWithoutSolveInput.schema';
import { TopSolveCreateWithoutSolveInputObjectSchema as TopSolveCreateWithoutSolveInputObjectSchema } from './TopSolveCreateWithoutSolveInput.schema';
import { TopSolveUncheckedCreateWithoutSolveInputObjectSchema as TopSolveUncheckedCreateWithoutSolveInputObjectSchema } from './TopSolveUncheckedCreateWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopSolveWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopSolveUpdateWithoutSolveInputObjectSchema), z.lazy(() => TopSolveUncheckedUpdateWithoutSolveInputObjectSchema)]),
  create: z.union([z.lazy(() => TopSolveCreateWithoutSolveInputObjectSchema), z.lazy(() => TopSolveUncheckedCreateWithoutSolveInputObjectSchema)])
}).strict();
export const TopSolveUpsertWithWhereUniqueWithoutSolveInputObjectSchema: z.ZodType<Prisma.TopSolveUpsertWithWhereUniqueWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUpsertWithWhereUniqueWithoutSolveInput>;
export const TopSolveUpsertWithWhereUniqueWithoutSolveInputObjectZodSchema = makeSchema();
