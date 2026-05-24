import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutSolve_1InputObjectSchema as TopAverageUpdateWithoutSolve_1InputObjectSchema } from './TopAverageUpdateWithoutSolve_1Input.schema';
import { TopAverageUncheckedUpdateWithoutSolve_1InputObjectSchema as TopAverageUncheckedUpdateWithoutSolve_1InputObjectSchema } from './TopAverageUncheckedUpdateWithoutSolve_1Input.schema';
import { TopAverageCreateWithoutSolve_1InputObjectSchema as TopAverageCreateWithoutSolve_1InputObjectSchema } from './TopAverageCreateWithoutSolve_1Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_1Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopAverageUpdateWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutSolve_1InputObjectSchema)]),
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema)])
}).strict();
export const TopAverageUpsertWithWhereUniqueWithoutSolve_1InputObjectSchema: z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutSolve_1Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutSolve_1Input>;
export const TopAverageUpsertWithWhereUniqueWithoutSolve_1InputObjectZodSchema = makeSchema();
