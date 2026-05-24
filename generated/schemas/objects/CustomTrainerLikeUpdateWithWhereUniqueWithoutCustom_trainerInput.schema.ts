import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeUpdateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUpdateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUpdateWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeUncheckedUpdateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUncheckedUpdateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUncheckedUpdateWithoutCustom_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerLikeUpdateWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedUpdateWithoutCustom_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerLikeUpdateWithWhereUniqueWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpdateWithWhereUniqueWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateWithWhereUniqueWithoutCustom_trainerInput>;
export const CustomTrainerLikeUpdateWithWhereUniqueWithoutCustom_trainerInputObjectZodSchema = makeSchema();
