import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ForgotPasswordCreateWithoutUserInputObjectSchema as ForgotPasswordCreateWithoutUserInputObjectSchema } from './ForgotPasswordCreateWithoutUserInput.schema';
import { ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema as ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema } from './ForgotPasswordUncheckedCreateWithoutUserInput.schema';
import { ForgotPasswordCreateOrConnectWithoutUserInputObjectSchema as ForgotPasswordCreateOrConnectWithoutUserInputObjectSchema } from './ForgotPasswordCreateOrConnectWithoutUserInput.schema';
import { ForgotPasswordUpsertWithWhereUniqueWithoutUserInputObjectSchema as ForgotPasswordUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ForgotPasswordUpsertWithWhereUniqueWithoutUserInput.schema';
import { ForgotPasswordCreateManyUserInputEnvelopeObjectSchema as ForgotPasswordCreateManyUserInputEnvelopeObjectSchema } from './ForgotPasswordCreateManyUserInputEnvelope.schema';
import { ForgotPasswordWhereUniqueInputObjectSchema as ForgotPasswordWhereUniqueInputObjectSchema } from './ForgotPasswordWhereUniqueInput.schema';
import { ForgotPasswordUpdateWithWhereUniqueWithoutUserInputObjectSchema as ForgotPasswordUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ForgotPasswordUpdateWithWhereUniqueWithoutUserInput.schema';
import { ForgotPasswordUpdateManyWithWhereWithoutUserInputObjectSchema as ForgotPasswordUpdateManyWithWhereWithoutUserInputObjectSchema } from './ForgotPasswordUpdateManyWithWhereWithoutUserInput.schema';
import { ForgotPasswordScalarWhereInputObjectSchema as ForgotPasswordScalarWhereInputObjectSchema } from './ForgotPasswordScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ForgotPasswordCreateWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ForgotPasswordCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ForgotPasswordUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ForgotPasswordCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema), z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema), z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema), z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema), z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ForgotPasswordUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ForgotPasswordUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ForgotPasswordScalarWhereInputObjectSchema), z.lazy(() => ForgotPasswordScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ForgotPasswordUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ForgotPasswordUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordUpdateManyWithoutUserNestedInput>;
export const ForgotPasswordUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
