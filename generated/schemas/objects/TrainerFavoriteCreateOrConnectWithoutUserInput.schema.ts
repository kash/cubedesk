import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TrainerFavoriteWhereUniqueInputObjectSchema as TrainerFavoriteWhereUniqueInputObjectSchema } from './TrainerFavoriteWhereUniqueInput.schema';
import { TrainerFavoriteCreateWithoutUserInputObjectSchema as TrainerFavoriteCreateWithoutUserInputObjectSchema } from './TrainerFavoriteCreateWithoutUserInput.schema';
import { TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema as TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema } from './TrainerFavoriteUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TrainerFavoriteWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TrainerFavoriteCreateWithoutUserInputObjectSchema), z.lazy(() => TrainerFavoriteUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TrainerFavoriteCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TrainerFavoriteCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TrainerFavoriteCreateOrConnectWithoutUserInput>;
export const TrainerFavoriteCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
