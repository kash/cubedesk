import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutUserInputObjectSchema as SolveCreateWithoutUserInputObjectSchema } from './SolveCreateWithoutUserInput.schema';
import { SolveUncheckedCreateWithoutUserInputObjectSchema as SolveUncheckedCreateWithoutUserInputObjectSchema } from './SolveUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutUserInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutUserInput>;
export const SolveCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
