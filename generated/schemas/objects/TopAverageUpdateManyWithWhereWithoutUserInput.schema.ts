import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopAverageScalarWhereInputObjectSchema as TopAverageScalarWhereInputObjectSchema } from './TopAverageScalarWhereInput.schema';
import { TopAverageUpdateManyMutationInputObjectSchema as TopAverageUpdateManyMutationInputObjectSchema } from './TopAverageUpdateManyMutationInput.schema';
import { TopAverageUncheckedUpdateManyWithoutUserInputObjectSchema as TopAverageUncheckedUpdateManyWithoutUserInputObjectSchema } from './TopAverageUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopAverageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopAverageUpdateManyMutationInputObjectSchema), z.lazy(() => TopAverageUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const TopAverageUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageUpdateManyWithWhereWithoutUserInput>;
export const TopAverageUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
