import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema';
import { TopAverageUpdateManyMutationInputObjectSchema as TopAverageUpdateManyMutationInputObjectSchema } from './TopAverageUpdateManyMutationInput.schema';
import { TopAverageUncheckedUpdateManyWithoutSolve_3InputObjectSchema as TopAverageUncheckedUpdateManyWithoutSolve_3InputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutSolve_3Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateManyMutationInputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateManyWithoutSolve_3InputObjectSchema)])
}).strict();
export const TopAverageUpdateManyWithWhereWithoutSolve_3InputObjectSchema: z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutSolve_3Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutSolve_3Input>;
export const TopAverageUpdateManyWithWhereWithoutSolve_3InputObjectZodSchema = makeSchema();
