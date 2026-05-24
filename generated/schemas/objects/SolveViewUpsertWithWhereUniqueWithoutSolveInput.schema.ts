import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewUpdateWithoutSolveInputObjectSchema as SolveViewUpdateWithoutSolveInputObjectSchema } from './SolveViewUpdateWithoutSolveInput.schema';
import { SolveViewUncheckedUpdateWithoutSolveInputObjectSchema as SolveViewUncheckedUpdateWithoutSolveInputObjectSchema } from './SolveViewUncheckedUpdateWithoutSolveInput.schema';
import { SolveViewCreateWithoutSolveInputObjectSchema as SolveViewCreateWithoutSolveInputObjectSchema } from './SolveViewCreateWithoutSolveInput.schema';
import { SolveViewUncheckedCreateWithoutSolveInputObjectSchema as SolveViewUncheckedCreateWithoutSolveInputObjectSchema } from './SolveViewUncheckedCreateWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SolveViewUpdateWithoutSolveInputObjectSchema), z.lazy(() => SolveViewUncheckedUpdateWithoutSolveInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveViewCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutSolveInputObjectSchema)])
}).strict();
export const SolveViewUpsertWithWhereUniqueWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveViewUpsertWithWhereUniqueWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpsertWithWhereUniqueWithoutSolveInput>;
export const SolveViewUpsertWithWhereUniqueWithoutSolveInputObjectZodSchema = makeSchema();
