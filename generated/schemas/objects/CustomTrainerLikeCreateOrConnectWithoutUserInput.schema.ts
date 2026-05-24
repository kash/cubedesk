import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerLikeWhereUniqueInputObjectSchema as CustomTrainerLikeWhereUniqueInputObjectSchema } from './CustomTrainerLikeWhereUniqueInput.schema';
import { CustomTrainerLikeCreateWithoutUserInputObjectSchema as CustomTrainerLikeCreateWithoutUserInputObjectSchema } from './CustomTrainerLikeCreateWithoutUserInput.schema';
import { CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema as CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema } from './CustomTrainerLikeUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerLikeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerLikeCreateWithoutUserInputObjectSchema), z.lazy(() => CustomTrainerLikeUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CustomTrainerLikeCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.CustomTrainerLikeCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerLikeCreateOrConnectWithoutUserInput>;
export const CustomTrainerLikeCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
