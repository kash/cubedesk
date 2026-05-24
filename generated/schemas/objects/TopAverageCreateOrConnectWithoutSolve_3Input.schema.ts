import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageCreateWithoutSolve_3InputObjectSchema as TopAverageCreateWithoutSolve_3InputObjectSchema } from './TopAverageCreateWithoutSolve_3Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_3Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_3InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_3InputObjectSchema)])
}).strict();
export const TopAverageCreateOrConnectWithoutSolve_3InputObjectSchema: z.ZodType<Prisma.TopAverageCreateOrConnectWithoutSolve_3Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateOrConnectWithoutSolve_3Input>;
export const TopAverageCreateOrConnectWithoutSolve_3InputObjectZodSchema = makeSchema();
