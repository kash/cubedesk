import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeCreateWithoutCreatorInputObjectSchema as CustomTrainerLikeCreateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeCreateWithoutCreatorInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutCreatorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutCreatorInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutCreatorInputObjectSchema)])
}).strict();
export const CustomTrainerLikeCreateOrConnectWithoutCreatorInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCreateOrConnectWithoutCreatorInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateOrConnectWithoutCreatorInput>;
export const CustomTrainerLikeCreateOrConnectWithoutCreatorInputObjectZodSchema = makeSchema();
