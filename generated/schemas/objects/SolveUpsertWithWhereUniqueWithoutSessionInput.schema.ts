import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateWithoutSessionInputObjectSchema as SolveUpdateWithoutSessionInputObjectSchema } from './SolveUpdateWithoutSessionInput.schema';
import { SolveUncheckedUpdateWithoutSessionInputObjectSchema as SolveUncheckedUpdateWithoutSessionInputObjectSchema } from './SolveUncheckedUpdateWithoutSessionInput.schema';
import { SolveCreateWithoutSessionInputObjectSchema as SolveCreateWithoutSessionInputObjectSchema } from './SolveCreateWithoutSessionInput.schema';
import { SolveUncheckedCreateWithoutSessionInputObjectSchema as SolveUncheckedCreateWithoutSessionInputObjectSchema } from './SolveUncheckedCreateWithoutSessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SolveUpdateWithoutSessionInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutSessionInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutSessionInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSessionInputObjectSchema)])
}).strict();
export const SolveUpsertWithWhereUniqueWithoutSessionInputObjectSchema: z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithWhereUniqueWithoutSessionInput>;
export const SolveUpsertWithWhereUniqueWithoutSessionInputObjectZodSchema = makeSchema();
