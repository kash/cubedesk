import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewUpdateWithoutViewerInputObjectSchema as SolveViewUpdateWithoutViewerInputObjectSchema } from './SolveViewUpdateWithoutViewerInput.schema';
import { SolveViewUncheckedUpdateWithoutViewerInputObjectSchema as SolveViewUncheckedUpdateWithoutViewerInputObjectSchema } from './SolveViewUncheckedUpdateWithoutViewerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SolveViewUpdateWithoutViewerInputObjectSchema), z.lazy(() => SolveViewUncheckedUpdateWithoutViewerInputObjectSchema)])
}).strict();
export const SolveViewUpdateWithWhereUniqueWithoutViewerInputObjectSchema: z.ZodType<Prisma.SolveViewUpdateWithWhereUniqueWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpdateWithWhereUniqueWithoutViewerInput>;
export const SolveViewUpdateWithWhereUniqueWithoutViewerInputObjectZodSchema = makeSchema();
