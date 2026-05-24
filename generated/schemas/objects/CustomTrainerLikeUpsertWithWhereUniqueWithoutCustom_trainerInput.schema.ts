import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeUpdateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUpdateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUpdateWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeUncheckedUpdateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUncheckedUpdateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUncheckedUpdateWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeCreateWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomTrainerLikeUpdateWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedUpdateWithoutCustom_trainerInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerLikeUpsertWithWhereUniqueWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpsertWithWhereUniqueWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpsertWithWhereUniqueWithoutCustom_trainerInput>;
export const CustomTrainerLikeUpsertWithWhereUniqueWithoutCustom_trainerInputObjectZodSchema = makeSchema();
