import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutSolve_3InputObjectSchema as TopAverageUpdateWithoutSolve_3InputObjectSchema } from './TopAverageUpdateWithoutSolve_3Input.schema';
import { TopAverageUncheckedUpdateWithoutSolve_3InputObjectSchema as TopAverageUncheckedUpdateWithoutSolve_3InputObjectSchema } from './TopAverageUncheckedUpdateWithoutSolve_3Input.schema';
import { TopAverageCreateWithoutSolve_3InputObjectSchema as TopAverageCreateWithoutSolve_3InputObjectSchema } from './TopAverageCreateWithoutSolve_3Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_3Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopAverageUpdateWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutSolve_3InputObjectSchema)]),
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema)])
}).strict();
export const TopAverageUpsertWithWhereUniqueWithoutSolve_3InputObjectSchema: z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutSolve_3Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutSolve_3Input>;
export const TopAverageUpsertWithWhereUniqueWithoutSolve_3InputObjectZodSchema = makeSchema();
