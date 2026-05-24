import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewScalarWhereInputObjectSchema as SolveViewScalarWhereInputObjectSchema } from './SolveViewScalarWhereInput.schema';
import { SolveViewUpdateManyMutationInputObjectSchema as SolveViewUpdateManyMutationInputObjectSchema } from './SolveViewUpdateManyMutationInput.schema';
import { SolveViewUncheckedUpdateManyWithoutUserInputObjectSchema as SolveViewUncheckedUpdateManyWithoutUserInputObjectSchema } from './SolveViewUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveViewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SolveViewUpdateManyMutationInputObjectSchema), z.lazy(() => SolveViewUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const SolveViewUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.SolveViewUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewUpdateManyWithWhereWithoutUserInput>;
export const SolveViewUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
