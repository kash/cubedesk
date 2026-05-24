import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutSolve_2InputObjectSchema as TopAverageUpdateWithoutSolve_2InputObjectSchema } from './TopAverageUpdateWithoutSolve_2Input.schema';
import { TopAverageUncheckedUpdateWithoutSolve_2InputObjectSchema as TopAverageUncheckedUpdateWithoutSolve_2InputObjectSchema } from './TopAverageUncheckedUpdateWithoutSolve_2Input.schema';
import { TopAverageCreateWithoutSolve_2InputObjectSchema as TopAverageCreateWithoutSolve_2InputObjectSchema } from './TopAverageCreateWithoutSolve_2Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_2Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopAverageUpdateWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutSolve_2InputObjectSchema)]),
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema)])
}).strict();
export const TopAverageUpsertWithWhereUniqueWithoutSolve_2InputObjectSchema: z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutSolve_2Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutSolve_2Input>;
export const TopAverageUpsertWithWhereUniqueWithoutSolve_2InputObjectZodSchema = makeSchema();
