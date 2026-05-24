import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutMatchInputObjectSchema as SolveCreateWithoutMatchInputObjectSchema } from './SolveCreateWithoutMatchInput.schema';
import { SolveUncheckedCreateWithoutMatchInputObjectSchema as SolveUncheckedCreateWithoutMatchInputObjectSchema } from './SolveUncheckedCreateWithoutMatchInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutMatchInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutMatchInputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutMatchInputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutMatchInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutMatchInput>;
export const SolveCreateOrConnectWithoutMatchInputObjectZodSchema = makeSchema();
