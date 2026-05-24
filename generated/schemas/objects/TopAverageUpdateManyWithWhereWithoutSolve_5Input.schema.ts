import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema';
import { TopAverageUpdateManyMutationInputObjectSchema as TopAverageUpdateManyMutationInputObjectSchema } from './TopAverageUpdateManyMutationInput.schema';
import { TopAverageUncheckedUpdateManyWithoutSolve_5InputObjectSchema as TopAverageUncheckedUpdateManyWithoutSolve_5InputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutSolve_5Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateManyMutationInputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateManyWithoutSolve_5InputObjectSchema)])
}).strict();
export const TopAverageUpdateManyWithWhereWithoutSolve_5InputObjectSchema: z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutSolve_5Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutSolve_5Input>;
export const TopAverageUpdateManyWithWhereWithoutSolve_5InputObjectZodSchema = makeSchema();
