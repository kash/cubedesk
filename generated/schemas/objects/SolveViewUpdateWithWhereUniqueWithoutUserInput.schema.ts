import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewWhereUniqueInputObjectSchema as SolveViewWhereUniqueInputObjectSchema } from './SolveViewWhereUniqueInput.schema';
import { SolveViewUpdateWithoutUserInputObjectSchema as SolveViewUpdateWithoutUserInputObjectSchema } from './SolveViewUpdateWithoutUserInput.schema';
import { SolveViewUncheckedUpdateWithoutUserInputObjectSchema as SolveViewUncheckedUpdateWithoutUserInputObjectSchema } from './SolveViewUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SolveViewUpdateWithoutUserInputObjectSchema), z.lazy(() => SolveViewUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const SolveViewUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SolveViewUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpdateWithWhereUniqueWithoutUserInput>;
export const SolveViewUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
