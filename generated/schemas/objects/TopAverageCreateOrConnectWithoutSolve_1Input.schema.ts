import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageCreateWithoutSolve_1InputObjectSchema as TopAverageCreateWithoutSolve_1InputObjectSchema } from './TopAverageCreateWithoutSolve_1Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_1Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_1InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_1InputObjectSchema)])
}).strict();
export const TopAverageCreateOrConnectWithoutSolve_1InputObjectSchema: z.ZodType<Prisma.TopAverageCreateOrConnectWithoutSolve_1Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateOrConnectWithoutSolve_1Input>;
export const TopAverageCreateOrConnectWithoutSolve_1InputObjectZodSchema = makeSchema();
