import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeScalarWhereInputObjectSchema as CustomTrainerLikeScalarWhereInputObjectSchema } from './CustomTrainerLikeScalarWhereInput.schema';
import { CustomTrainerLikeUpdateManyMutationInputObjectSchema as CustomTrainerLikeUpdateManyMutationInputObjectSchema } from './CustomTrainerLikeUpdateManyMutationInput.schema';
import { CustomTrainerLikeUncheckedUpdateManyWithoutUserInputObjectSchema as CustomTrainerLikeUncheckedUpdateManyWithoutUserInputObjectSchema } from './CustomTrainerLikeUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerLikeUpdateManyMutationInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerLikeUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeUpdateManyWithWhereWithoutUserInput>;
export const CustomTrainerLikeUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
