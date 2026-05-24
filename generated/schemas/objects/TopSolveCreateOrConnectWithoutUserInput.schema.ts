import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveWhereUniqueInputObjectSchema as TopSolveWhereUniqueInputObjectSchema } from './TopSolveWhereUniqueInput.schema';
import { TopSolveCreateWithoutUserInputObjectSchema as TopSolveCreateWithoutUserInputObjectSchema } from './TopSolveCreateWithoutUserInput.schema';
import { TopSolveUncheckedCreateWithoutUserInputObjectSchema as TopSolveUncheckedCreateWithoutUserInputObjectSchema } from './TopSolveUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopSolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopSolveCreateWithoutUserInputObjectSchema), z.lazy(() => TopSolveUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TopSolveCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TopSolveCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveCreateOrConnectWithoutUserInput>;
export const TopSolveCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
