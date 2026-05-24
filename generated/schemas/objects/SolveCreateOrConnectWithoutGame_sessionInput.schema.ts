import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutGame_sessionInputObjectSchema as SolveCreateWithoutGame_sessionInputObjectSchema } from './SolveCreateWithoutGame_sessionInput.schema';
import { SolveUncheckedCreateWithoutGame_sessionInputObjectSchema as SolveUncheckedCreateWithoutGame_sessionInputObjectSchema } from './SolveUncheckedCreateWithoutGame_sessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutGame_sessionInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutGame_sessionInputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutGame_sessionInputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutGame_sessionInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutGame_sessionInput>;
export const SolveCreateOrConnectWithoutGame_sessionInputObjectZodSchema = makeSchema();
