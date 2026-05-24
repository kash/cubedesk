import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewCreateWithoutUserInputObjectSchema as SolveViewCreateWithoutUserInputObjectSchema } from './SolveViewCreateWithoutUserInput.schema';
import { SolveViewUncheckedCreateWithoutUserInputObjectSchema as SolveViewUncheckedCreateWithoutUserInputObjectSchema } from './SolveViewUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveViewCreateWithoutUserInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SolveViewCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.SolveViewCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateOrConnectWithoutUserInput>;
export const SolveViewCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
