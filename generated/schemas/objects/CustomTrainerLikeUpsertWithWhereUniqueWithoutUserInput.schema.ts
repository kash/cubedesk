import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeUpdateWithoutUserInputObjectSchema as CustomTrainerLikeUpdateWithoutUserInputObjectSchema } from './CustomTrainerLikeUpdateWithoutUserInput.schema';
import { CustomTrainerLikeUncheckedUpdateWithoutUserInputObjectSchema as CustomTrainerLikeUncheckedUpdateWithoutUserInputObjectSchema } from './CustomTrainerLikeUncheckedUpdateWithoutUserInput.schema';
import { CustomTrainerLikeCreateWithoutUserInputObjectSchema as CustomTrainerLikeCreateWithoutUserInputObjectSchema } from './CustomTrainerLikeCreateWithoutUserInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomTrainerLikeUpdateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerLikeUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpsertWithWhereUniqueWithoutUserInput>;
export const CustomTrainerLikeUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
