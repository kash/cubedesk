import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutMatchInputObjectSchema as SolveUpdateWithoutMatchInputObjectSchema } from './SolveUpdateWithoutMatchInput.schema';
import { SolveUncheckedUpdateWithoutMatchInputObjectSchema as SolveUncheckedUpdateWithoutMatchInputObjectSchema } from './SolveUncheckedUpdateWithoutMatchInput.schema';
import { SolveCreateWithoutMatchInputObjectSchema as SolveCreateWithoutMatchInputObjectSchema } from './SolveCreateWithoutMatchInput.schema';
import { SolveUncheckedCreateWithoutMatchInputObjectSchema as SolveUncheckedCreateWithoutMatchInputObjectSchema } from './SolveUncheckedCreateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SolveUpdateWithoutMatchInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutMatchInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutMatchInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutMatchInputObjectSchema)])
}).strict();
export const SolveUpsertWithWhereUniqueWithoutMatchInputObjectSchema: z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutMatchInput>;
export const SolveUpsertWithWhereUniqueWithoutMatchInputObjectZodSchema = makeSchema();
