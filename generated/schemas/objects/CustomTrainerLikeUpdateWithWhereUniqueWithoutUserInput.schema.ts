import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeUpdateWithoutUserInputObjectSchema as CustomTrainerLikeUpdateWithoutUserInputObjectSchema } from './CustomTrainerLikeUpdateWithoutUserInput.schema';
import { CustomTrainerLikeUncheckedUpdateWithoutUserInputObjectSchema as CustomTrainerLikeUncheckedUpdateWithoutUserInputObjectSchema } from './CustomTrainerLikeUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerLikeUpdateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerLikeUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateWithWhereUniqueWithoutUserInput>;
export const CustomTrainerLikeUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
