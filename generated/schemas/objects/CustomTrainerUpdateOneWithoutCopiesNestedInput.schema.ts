import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutCopiesInputObjectSchema as CustomTrainerCreateWithoutCopiesInputObjectSchema } from './CustomTrainerCreateWithoutCopiesInput.schema';
import { CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema as CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutCopiesInput.schema';
import { CustomTrainerCreateOrConnectWithoutCopiesInputObjectSchema as CustomTrainerCreateOrConnectWithoutCopiesInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutCopiesInput.schema';
import { CustomTrainerUpsertWithoutCopiesInputObjectSchema as CustomTrainerUpsertWithoutCopiesInputObjectSchema } from './CustomTrainerUpsertWithoutCopiesInput.schema';
import { CustomTrainerWhereInputObjectSchema as CustomTrainerWhereInputObjectSchema } from './CustomTrainerWhereInput.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema';
import { CustomTrainerUpdateToOneWithWhereWithoutCopiesInputObjectSchema as CustomTrainerUpdateToOneWithWhereWithoutCopiesInputObjectSchema } from './CustomTrainerUpdateToOneWithWhereWithoutCopiesInput.schema';
import { CustomTrainerUpdateWithoutCopiesInputObjectSchema as CustomTrainerUpdateWithoutCopiesInputObjectSchema } from './CustomTrainerUpdateWithoutCopiesInput.schema';
import { CustomTrainerUncheckedUpdateWithoutCopiesInputObjectSchema as CustomTrainerUncheckedUpdateWithoutCopiesInputObjectSchema } from './CustomTrainerUncheckedUpdateWithoutCopiesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutCopiesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutCopiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CustomTrainerCreateOrConnectWithoutCopiesInputObjectSchema).optional(),
  upsert: z.lazy(() => CustomTrainerUpsertWithoutCopiesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CustomTrainerWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CustomTrainerWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CustomTrainerUpdateToOneWithWhereWithoutCopiesInputObjectSchema), z.lazy(() => CustomTrainerUpdateWithoutCopiesInputObjectSchema), z.lazy(() => CustomTrainerUncheckedUpdateWithoutCopiesInputObjectSchema)]).optional()
}).strict();
export const CustomTrainerUpdateOneWithoutCopiesNestedInputObjectSchema: z.ZodType<Prisma.CustomTrainerUpdateOneWithoutCopiesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUpdateOneWithoutCopiesNestedInput>;
export const CustomTrainerUpdateOneWithoutCopiesNestedInputObjectZodSchema = makeSchema();
