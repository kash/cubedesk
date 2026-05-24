import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeCreateWithoutCustom_trainerInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutCustom_trainerInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCustom_trainerInputObjectSchema)])
}).strict();
export const CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInput>;
export const CustomTrainerLikeCreateOrConnectWithoutCustom_trainerInputObjectZodSchema = makeSchema();
