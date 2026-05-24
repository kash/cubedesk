import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewUpdateWithoutUserInputObjectSchema as SolveViewUpdateWithoutUserInputObjectSchema } from './SolveViewUpdateWithoutUserInput.schema';
import { SolveViewUncheckedUpdateWithoutUserInputObjectSchema as SolveViewUncheckedUpdateWithoutUserInputObjectSchema } from './SolveViewUncheckedUpdateWithoutUserInput.schema';
import { SolveViewCreateWithoutUserInputObjectSchema as SolveViewCreateWithoutUserInputObjectSchema } from './SolveViewCreateWithoutUserInput.schema';
import { SolveViewUncheckedCreateWithoutUserInputObjectSchema as SolveViewUncheckedCreateWithoutUserInputObjectSchema } from './SolveViewUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SolveViewUpdateWithoutUserInputObjectSchema), z.lazy(() => SolveViewUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveViewCreateWithoutUserInputObjectSchema), z.lazy(() => SolveViewUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SolveViewUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SolveViewUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpsertWithWhereUniqueWithoutUserInput>;
export const SolveViewUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
