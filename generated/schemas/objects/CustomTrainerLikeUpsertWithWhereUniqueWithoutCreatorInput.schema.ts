import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeUpdateWithoutCreatorInputObjectSchema as CustomTrainerLikeUpdateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUpdateWithoutCreatorInput.schema';
import { CustomTrainerLikeUncheckedUpdateWithoutCreatorInputObjectSchema as CustomTrainerLikeUncheckedUpdateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUncheckedUpdateWithoutCreatorInput.schema';
import { CustomTrainerLikeCreateWithoutCreatorInputObjectSchema as CustomTrainerLikeCreateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeCreateWithoutCreatorInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomTrainerLikeUpdateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedUpdateWithoutCreatorInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema)])
}).strict();
export const CustomTrainerLikeUpsertWithWhereUniqueWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpsertWithWhereUniqueWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpsertWithWhereUniqueWithoutCreatorInput>;
export const CustomTrainerLikeUpsertWithWhereUniqueWithoutCreatorInputObjectZodSchema = makeSchema();
