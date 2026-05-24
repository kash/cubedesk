import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewUpdateWithoutViewerInputObjectSchema as SolveViewUpdateWithoutViewerInputObjectSchema } from './SolveViewUpdateWithoutViewerInput.schema';
import { SolveViewUncheckedUpdateWithoutViewerInputObjectSchema as SolveViewUncheckedUpdateWithoutViewerInputObjectSchema } from './SolveViewUncheckedUpdateWithoutViewerInput.schema';
import { SolveViewCreateWithoutViewerInputObjectSchema as SolveViewCreateWithoutViewerInputObjectSchema } from './SolveViewCreateWithoutViewerInput.schema';
import { SolveViewUncheckedCreateWithoutViewerInputObjectSchema as SolveViewUncheckedCreateWithoutViewerInputObjectSchema } from './SolveViewUncheckedCreateWithoutViewerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SolveViewUpdateWithoutViewerInputObjectSchema), z.lazy(() => SolveViewUncheckedUpdateWithoutViewerInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveViewCreateWithoutViewerInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutViewerInputObjectSchema)])
}).strict();
export const SolveViewUpsertWithWhereUniqueWithoutViewerInputObjectSchema: z.ZodType<Prisma.SolveViewUpsertWithWhereUniqueWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpsertWithWhereUniqueWithoutViewerInput>;
export const SolveViewUpsertWithWhereUniqueWithoutViewerInputObjectZodSchema = makeSchema();
