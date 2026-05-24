import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerCreateWithoutLikesInputObjectSchema as CustomTrainerCreateWithoutLikesInputObjectSchema } from './CustomTrainerCreateWithoutLikesInput.schema';
import { CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema as CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutLikesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutLikesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema)])
}).strict();
export const CustomTrainerCreateOrConnectWithoutLikesInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateOrConnectWithoutLikesInput>;
export const CustomTrainerCreateOrConnectWithoutLikesInputObjectZodSchema = makeSchema();
