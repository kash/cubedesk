import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerUpdateWithoutUserInputObjectSchema as CustomTrainerUpdateWithoutUserInputObjectSchema } from './CustomTrainerUpdateWithoutUserInput.schema';
import { CustomTrainerUncheckedUpdateWithoutUserInputObjectSchema as CustomTrainerUncheckedUpdateWithoutUserInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomTrainerUpdateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateWithWhereUniqueWithoutUserInput>;
export const CustomTrainerUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
