import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeUpdateWithoutCreatorInputObjectSchema as CustomTrainerLikeUpdateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUpdateWithoutCreatorInput.schema';
import { CustomTrainerLikeUncheckedUpdateWithoutCreatorInputObjectSchema as CustomTrainerLikeUncheckedUpdateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUncheckedUpdateWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerLikeUpdateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedUpdateWithoutCreatorInputObjectSchema)])
}).strict();
export const CustomTrainerLikeUpdateWithWhereUniqueWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpdateWithWhereUniqueWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateWithWhereUniqueWithoutCreatorInput>;
export const CustomTrainerLikeUpdateWithWhereUniqueWithoutCreatorInputObjectZodSchema = makeSchema();
