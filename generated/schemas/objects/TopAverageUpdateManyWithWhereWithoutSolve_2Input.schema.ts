import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema';
import { TopAverageUpdateManyMutationInputObjectSchema as TopAverageUpdateManyMutationInputObjectSchema } from './TopAverageUpdateManyMutationInput.schema';
import { TopAverageUncheckedUpdateManyWithoutSolve_2InputObjectSchema as TopAverageUncheckedUpdateManyWithoutSolve_2InputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutSolve_2Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateManyMutationInputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateManyWithoutSolve_2InputObjectSchema)])
}).strict();
export const TopAverageUpdateManyWithWhereWithoutSolve_2InputObjectSchema: z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutSolve_2Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutSolve_2Input>;
export const TopAverageUpdateManyWithWhereWithoutSolve_2InputObjectZodSchema = makeSchema();
