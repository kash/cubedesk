import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutSessionInputObjectSchema as SolveCreateWithoutSessionInputObjectSchema } from './SolveCreateWithoutSessionInput.schema';
import { SolveUncheckedCreateWithoutSessionInputObjectSchema as SolveUncheckedCreateWithoutSessionInputObjectSchema } from './SolveUncheckedCreateWithoutSessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutSessionInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSessionInputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutSessionInputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutSessionInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutSessionInput>;
export const SolveCreateOrConnectWithoutSessionInputObjectZodSchema = makeSchema();
