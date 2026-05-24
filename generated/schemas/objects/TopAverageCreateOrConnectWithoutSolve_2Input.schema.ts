import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageCreateWithoutSolve_2InputObjectSchema as TopAverageCreateWithoutSolve_2InputObjectSchema } from './TopAverageCreateWithoutSolve_2Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_2Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_2InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_2InputObjectSchema)])
}).strict();
export const TopAverageCreateOrConnectWithoutSolve_2InputObjectSchema: z.ZodType<Prisma.TopAverageCreateOrConnectWithoutSolve_2Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateOrConnectWithoutSolve_2Input>;
export const TopAverageCreateOrConnectWithoutSolve_2InputObjectZodSchema = makeSchema();
