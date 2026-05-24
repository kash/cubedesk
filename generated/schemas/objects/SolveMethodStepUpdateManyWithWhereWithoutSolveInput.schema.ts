import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepScalarWhereInputObjectSchema as SolveMethodStepScalarWhereInputObjectSchema } from './SolveMethodStepScalarWhereInput.schema';
import { SolveMethodStepUpdateManyMutationInputObjectSchema as SolveMethodStepUpdateManyMutationInputObjectSchema } from './SolveMethodStepUpdateManyMutationInput.schema';
import { SolveMethodStepUncheckedUpdateManyWithoutSolveInputObjectSchema as SolveMethodStepUncheckedUpdateManyWithoutSolveInputObjectSchema } from './SolveMethodStepUncheckedUpdateManyWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveMethodStepScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SolveMethodStepUpdateManyMutationInputObjectSchema), z.lazy(() => SolveMethodStepUncheckedUpdateManyWithoutSolveInputObjectSchema)])
}).strict();
export const SolveMethodStepUpdateManyWithWhereWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveMethodStepUpdateManyWithWhereWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepUpdateManyWithWhereWithoutSolveInput>;
export const SolveMethodStepUpdateManyWithWhereWithoutSolveInputObjectZodSchema = makeSchema();
