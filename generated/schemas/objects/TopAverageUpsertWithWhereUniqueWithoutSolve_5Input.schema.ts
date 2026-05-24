import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutSolve_5InputObjectSchema as TopAverageUpdateWithoutSolve_5InputObjectSchema } from './TopAverageUpdateWithoutSolve_5Input.schema';
import { TopAverageUncheckedUpdateWithoutSolve_5InputObjectSchema as TopAverageUncheckedUpdateWithoutSolve_5InputObjectSchema } from './TopAverageUncheckedUpdateWithoutSolve_5Input.schema';
import { TopAverageCreateWithoutSolve_5InputObjectSchema as TopAverageCreateWithoutSolve_5InputObjectSchema } from './TopAverageCreateWithoutSolve_5Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_5Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopAverageUpdateWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutSolve_5InputObjectSchema)]),
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema)])
}).strict();
export const TopAverageUpsertWithWhereUniqueWithoutSolve_5InputObjectSchema: z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutSolve_5Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutSolve_5Input>;
export const TopAverageUpsertWithWhereUniqueWithoutSolve_5InputObjectZodSchema = makeSchema();
