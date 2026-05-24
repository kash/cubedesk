import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageCreateWithoutSolve_5InputObjectSchema as TopAverageCreateWithoutSolve_5InputObjectSchema } from './TopAverageCreateWithoutSolve_5Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_5Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_5InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_5InputObjectSchema)])
}).strict();
export const TopAverageCreateOrConnectWithoutSolve_5InputObjectSchema: z.ZodType<Prisma.TopAverageCreateOrConnectWithoutSolve_5Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateOrConnectWithoutSolve_5Input>;
export const TopAverageCreateOrConnectWithoutSolve_5InputObjectZodSchema = makeSchema();
