import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeScalarWhereInputObjectSchema as CustomTrainerLikeScalarWhereInputObjectSchema } from './CustomTrainerLikeScalarWhereInput.schema';
import { CustomTrainerLikeUpdateManyMutationInputObjectSchema as CustomTrainerLikeUpdateManyMutationInputObjectSchema } from './CustomTrainerLikeUpdateManyMutationInput.schema';
import { CustomTrainerLikeUncheckedUpdateManyWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUncheckedUpdateManyWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUncheckedUpdateManyWithoutCustom_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerLikeUpdateManyMutationInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedUpdateManyWithoutCustom_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerLikeUpdateManyWithWhereWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpdateManyWithWhereWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateManyWithWhereWithoutCustom_trainerInput>;
export const CustomTrainerLikeUpdateManyWithWhereWithoutCustom_trainerInputObjectZodSchema = makeSchema();
