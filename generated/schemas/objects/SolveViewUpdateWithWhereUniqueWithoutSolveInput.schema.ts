import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewUpdateWithoutSolveInputObjectSchema as SolveViewUpdateWithoutSolveInputObjectSchema } from './SolveViewUpdateWithoutSolveInput.schema';
import { SolveViewUncheckedUpdateWithoutSolveInputObjectSchema as SolveViewUncheckedUpdateWithoutSolveInputObjectSchema } from './SolveViewUncheckedUpdateWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SolveViewUpdateWithoutSolveInputObjectSchema), z.lazy(() => SolveViewUncheckedUpdateWithoutSolveInputObjectSchema)])
}).strict();
export const SolveViewUpdateWithWhereUniqueWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveViewUpdateWithWhereUniqueWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpdateWithWhereUniqueWithoutSolveInput>;
export const SolveViewUpdateWithWhereUniqueWithoutSolveInputObjectZodSchema = makeSchema();
