import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TrainerFavoriteWhereUniqueInputObjectSchema as TrainerFavoriteWhereUniqueInputObjectSchema } from './TrainerFavoriteWhereUniqueInput.schema';
import { TrainerFavoriteUpdateWithoutUserInputObjectSchema as TrainerFavoriteUpdateWithoutUserInputObjectSchema } from './TrainerFavoriteUpdateWithoutUserInput.schema';
import { TrainerFavoriteUncheckedUpdateWithoutUserInputObjectSchema as TrainerFavoriteUncheckedUpdateWithoutUserInputObjectSchema } from './TrainerFavoriteUncheckedUpdateWithoutUserInput.schema';
import { TrainerFavoriteCreateWithoutUserInputObjectSchema as TrainerFavoriteCreateWithoutUserInputObjectSchema } from './TrainerFavoriteCreateWithoutUserInput.schema';
import { TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema as TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema } from './TrainerFavoriteUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TrainerFavoriteUpdateWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TrainerFavoriteCreateWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TrainerFavoriteUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteUpsertWithWhereUniqueWithoutUserInput>;
export const TrainerFavoriteUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
