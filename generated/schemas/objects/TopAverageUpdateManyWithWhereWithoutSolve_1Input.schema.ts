import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema';
import { TopAverageUpdateManyMutationInputObjectSchema as TopAverageUpdateManyMutationInputObjectSchema } from './TopAverageUpdateManyMutationInput.schema';
import { TopAverageUncheckedUpdateManyWithoutSolve_1InputObjectSchema as TopAverageUncheckedUpdateManyWithoutSolve_1InputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutSolve_1Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateManyMutationInputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateManyWithoutSolve_1InputObjectSchema)])
}).strict();
export const TopAverageUpdateManyWithWhereWithoutSolve_1InputObjectSchema: z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutSolve_1Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutSolve_1Input>;
export const TopAverageUpdateManyWithWhereWithoutSolve_1InputObjectZodSchema = makeSchema();
