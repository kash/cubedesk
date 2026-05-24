import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewScalarWhereInputObjectSchema as SolveViewScalarWhereInputObjectSchema } from './SolveViewScalarWhereInput.schema';
import { SolveViewUpdateManyMutationInputObjectSchema as SolveViewUpdateManyMutationInputObjectSchema } from './SolveViewUpdateManyMutationInput.schema';
import { SolveViewUncheckedUpdateManyWithoutViewerInputObjectSchema as SolveViewUncheckedUpdateManyWithoutViewerInputObjectSchema } from './SolveViewUncheckedUpdateManyWithoutViewerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SolveViewUpdateManyMutationInputObjectSchema), z.lazy(() => SolveViewUncheckedUpdateManyWithoutViewerInputObjectSchema)])
}).strict();
export const SolveViewUpdateManyWithWhereWithoutViewerInputObjectSchema: z.ZodType<Prisma.SolveViewUpdateManyWithWhereWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpdateManyWithWhereWithoutViewerInput>;
export const SolveViewUpdateManyWithWhereWithoutViewerInputObjectZodSchema = makeSchema();
