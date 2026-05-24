import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutLikesInputObjectSchema as CustomTrainerCreateWithoutLikesInputObjectSchema } from './CustomTrainerCreateWithoutLikesInput.schema';
import { CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema as CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutLikesInput.schema';
import { CustomTrainerCreateOrConnectWithoutLikesInputObjectSchema as CustomTrainerCreateOrConnectWithoutLikesInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutLikesInput.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutLikesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutLikesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomTrainerCreateOrConnectWithoutLikesInputObjectSchema).optional(),
  connect: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).optional()
}).strict();
export const CustomTrainerCreateNestedOneWithoutLikesInputObjectSchema: z.ZodType<Prisma.CustomTrainerCreateNestedOneWithoutLikesInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerCreateNestedOneWithoutLikesInput>;
export const CustomTrainerCreateNestedOneWithoutLikesInputObjectZodSchema = makeSchema();
