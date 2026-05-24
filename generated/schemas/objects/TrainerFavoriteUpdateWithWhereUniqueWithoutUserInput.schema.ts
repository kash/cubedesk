import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TrainerFavoriteWhereUniqueInputObjectSchema as TrainerFavoriteWhereUniqueInputObjectSchema } from './TrainerFavoriteWhereUniqueInput.schema';
import { TrainerFavoriteUpdateWithoutUserInputObjectSchema as TrainerFavoriteUpdateWithoutUserInputObjectSchema } from './TrainerFavoriteUpdateWithoutUserInput.schema';
import { TrainerFavoriteUncheckedUpdateWithoutUserInputObjectSchema as TrainerFavoriteUncheckedUpdateWithoutUserInputObjectSchema } from './TrainerFavoriteUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TrainerFavoriteUpdateWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TrainerFavoriteUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteUpdateWithWhereUniqueWithoutUserInput>;
export const TrainerFavoriteUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
