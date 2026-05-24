import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveScalarWhereInputObjectSchema as TopSolveScalarWhereInputObjectSchema } from './TopSolveScalarWhereInput.schema';
import { TopSolveUpdateManyMutationInputObjectSchema as TopSolveUpdateManyMutationInputObjectSchema } from './TopSolveUpdateManyMutationInput.schema';
import { TopSolveUncheckedUpdateManyWithoutUserInputObjectSchema as TopSolveUncheckedUpdateManyWithoutUserInputObjectSchema } from './TopSolveUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopSolveScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopSolveUpdateManyMutationInputObjectSchema), z.lazy(() => TopSolveUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const TopSolveUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TopSolveUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveUpdateManyWithWhereWithoutUserInput>;
export const TopSolveUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
