import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageWhereUniqueInputObjectSchema as TopAverageWhereUniqueInputObjectSchema } from './TopAverageWhereUniqueInput.schema';
import { TopAverageCreateWithoutSolve_4InputObjectSchema as TopAverageCreateWithoutSolve_4InputObjectSchema } from './TopAverageCreateWithoutSolve_4Input.schema';
import { TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema as TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema } from './TopAverageUncheckedCreateWithoutSolve_4Input.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopAverageCreateWithoutSolve_4InputObjectSchema), z.lazy(() => TopAverageUncheckedCreateWithoutSolve_4InputObjectSchema)])
}).strict();
export const TopAverageCreateOrConnectWithoutSolve_4InputObjectSchema: z.ZodType<Prisma.TopAverageCreateOrConnectWithoutSolve_4Input> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageCreateOrConnectWithoutSolve_4Input>;
export const TopAverageCreateOrConnectWithoutSolve_4InputObjectZodSchema = makeSchema();
