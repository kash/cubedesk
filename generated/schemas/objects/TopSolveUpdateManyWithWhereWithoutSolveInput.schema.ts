import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveScalarWhereInputObjectSchema as TopSolveScalarWhereInputObjectSchema } from './TopSolveScalarWhereInput.schema';
import { TopSolveUpdateManyMutationInputObjectSchema as TopSolveUpdateManyMutationInputObjectSchema } from './TopSolveUpdateManyMutationInput.schema';
import { TopSolveUncheckedUpdateManyWithoutSolveInputObjectSchema as TopSolveUncheckedUpdateManyWithoutSolveInputObjectSchema } from './TopSolveUncheckedUpdateManyWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopSolveScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopSolveUpdateManyMutationInputObjectSchema), z.lazy(() => TopSolveUncheckedUpdateManyWithoutSolveInputObjectSchema)])
}).strict();
export const TopSolveUpdateManyWithWhereWithoutSolveInputObjectSchema: z.ZodType<Prisma.TopSolveUpdateManyWithWhereWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUpdateManyWithWhereWithoutSolveInput>;
export const TopSolveUpdateManyWithWhereWithoutSolveInputObjectZodSchema = makeSchema();
