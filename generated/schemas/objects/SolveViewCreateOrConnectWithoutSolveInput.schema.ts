import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewCreateWithoutSolveInputObjectSchema as SolveViewCreateWithoutSolveInputObjectSchema } from './SolveViewCreateWithoutSolveInput.schema';
import { SolveViewUncheckedCreateWithoutSolveInputObjectSchema as SolveViewUncheckedCreateWithoutSolveInputObjectSchema } from './SolveViewUncheckedCreateWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveViewCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutSolveInputObjectSchema)])
}).strict();
export const SolveViewCreateOrConnectWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveViewCreateOrConnectWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateOrConnectWithoutSolveInput>;
export const SolveViewCreateOrConnectWithoutSolveInputObjectZodSchema = makeSchema();
