import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageUpdateWithoutSolve_4InputObjectSchema as TopAverageUpdateWithoutSolve_4InputObjectSchema } from './TopAverageUpdateWithoutSolve_4Input.schema';
import { TopAverageUncheckedUpdateWithoutSolve_4InputObjectSchema as TopAverageUncheckedUpdateWithoutSolve_4InputObjectSchema } from './TopAverageUncheckedUpdateWithoutSolve_4Input.schema';
import { TopAverageCreateWithoutSolve_4InputObjectSchema as TopAverageCreateWithoutSolve_4InputObjectSchema } from './TopAverageCreateWithoutSolve_4Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_4Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopAverageUpdateWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateWithoutSolve_4InputObjectSchema)]),
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema)])
}).strict();
export const TopAverageUpsertWithWhereUniqueWithoutSolve_4InputObjectSchema: z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutSolve_4Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpsertWithWhereUniqueWithoutSolve_4Input>;
export const TopAverageUpsertWithWhereUniqueWithoutSolve_4InputObjectZodSchema = makeSchema();
