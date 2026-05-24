import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ForgotPasswordCreateWithoutUserInputObjectSchema as ForgotPasswordCreateWithoutUserInputObjectSchema } from './ForgotPasswordCreateWithoutUserInput.schema';
import { ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema as ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema } from './ForgotPasswordUncheckedCreateWithoutUserInput.schema';
import { ForgotPasswordCreateOrConnectWithoutUserInputObjectSchema as ForgotPasswordCreateOrConnectWithoutUserInputObjectSchema } from './ForgotPasswordCreateOrConnectWithoutUserInput.schema';
import { ForgotPasswordCreateManyUserInputEnvelopeObjectSchema as ForgotPasswordCreateManyUserInputEnvelopeObjectSchema } from './ForgotPasswordCreateManyUserInputEnvelope.schema';
import { ForgotPasswordWhereUniqueInputObjectSchema as ForgotPasswordWhereUniqueInputObjectSchema } from './ForgotPasswordWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ForgotPasswordCreateWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ForgotPasswordCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ForgotPasswordCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema), z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ForgotPasswordCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ForgotPasswordCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordCreateNestedManyWithoutUserInput>;
export const ForgotPasswordCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
