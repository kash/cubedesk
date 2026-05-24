import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TrainerFavoriteScalarWhereInputObjectSchema as TrainerFavoriteScalarWhereInputObjectSchema } from './TrainerFavoriteScalarWhereInput.schema';
import { TrainerFavoriteUpdateManyMutationInputObjectSchema as TrainerFavoriteUpdateManyMutationInputObjectSchema } from './TrainerFavoriteUpdateManyMutationInput.schema';
import { TrainerFavoriteUncheckedUpdateManyWithoutUserInputObjectSchema as TrainerFavoriteUncheckedUpdateManyWithoutUserInputObjectSchema } from './TrainerFavoriteUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TrainerFavoriteScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TrainerFavoriteUpdateManyMutationInputObjectSchema), z.lazy(() => TrainerFavoriteUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const TrainerFavoriteUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteUpdateManyWithWhereWithoutUserInput>;
export const TrainerFavoriteUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
