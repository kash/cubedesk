import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema';
import { TopAverageUpdateManyMutationInputObjectSchema as TopAverageUpdateManyMutationInputObjectSchema } from './TopAverageUpdateManyMutationInput.schema';
import { TopAverageUncheckedUpdateManyWithoutSolve_4InputObjectSchema as TopAverageUncheckedUpdateManyWithoutSolve_4InputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutSolve_4Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateManyMutationInputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateManyWithoutSolve_4InputObjectSchema)])
}).strict();
export const TopAverageUpdateManyWithWhereWithoutSolve_4InputObjectSchema: z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutSolve_4Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutSolve_4Input>;
export const TopAverageUpdateManyWithWhereWithoutSolve_4InputObjectZodSchema = makeSchema();
