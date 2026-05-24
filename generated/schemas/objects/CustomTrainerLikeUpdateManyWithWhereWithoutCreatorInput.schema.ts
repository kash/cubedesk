import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeScalarWhereInputObjectSchema as CustomTrainerLikeScalarWhereInputObjectSchema } from './CustomTrainerLikeScalarWhereInput.schema';
import { CustomTrainerLikeUpdateManyMutationInputObjectSchema as CustomTrainerLikeUpdateManyMutationInputObjectSchema } from './CustomTrainerLikeUpdateManyMutationInput.schema';
import { CustomTrainerLikeUncheckedUpdateManyWithoutCreatorInputObjectSchema as CustomTrainerLikeUncheckedUpdateManyWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUncheckedUpdateManyWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerLikeUpdateManyMutationInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedUpdateManyWithoutCreatorInputObjectSchema)])
}).strict();
export const CustomTrainerLikeUpdateManyWithWhereWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpdateManyWithWhereWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateManyWithWhereWithoutCreatorInput>;
export const CustomTrainerLikeUpdateManyWithWhereWithoutCreatorInputObjectZodSchema = makeSchema();
