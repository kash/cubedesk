import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerUpdateWithoutUserInputObjectSchema as CustomTrainerUpdateWithoutUserInputObjectSchema } from './CustomTrainerUpdateWithoutUserInput.schema';
import { CustomTrainerUncheckedUpdateWithoutUserInputObjectSchema as CustomTrainerUncheckedUpdateWithoutUserInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutUserInput.schema';
import { CustomTrainerCreateWithoutUserInputObjectSchema as CustomTrainerCreateWithoutUserInputObjectSchema } from './CustomTrainerCreateWithoutUserInput.schema';
import { CustomTrainerUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomTrainerUpdateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpsertWithWhereUniqueWithoutUserInput>;
export const CustomTrainerUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
