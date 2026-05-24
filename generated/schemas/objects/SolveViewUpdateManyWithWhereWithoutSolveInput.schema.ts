import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewScalarWhereInputObjectSchema as SolveViewScalarWhereInputObjectSchema } from './SolveViewScalarWhereInput.schema';
import { SolveViewUpdateManyMutationInputObjectSchema as SolveViewUpdateManyMutationInputObjectSchema } from './SolveViewUpdateManyMutationInput.schema';
import { SolveViewUncheckedUpdateManyWithoutSolveInputObjectSchema as SolveViewUncheckedUpdateManyWithoutSolveInputObjectSchema } from './SolveViewUncheckedUpdateManyWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SolveViewUpdateManyMutationInputObjectSchema), z.lazy(() => SolveViewUncheckedUpdateManyWithoutSolveInputObjectSchema)])
}).strict();
export const SolveViewUpdateManyWithWhereWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveViewUpdateManyWithWhereWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpdateManyWithWhereWithoutSolveInput>;
export const SolveViewUpdateManyWithWhereWithoutSolveInputObjectZodSchema = makeSchema();
