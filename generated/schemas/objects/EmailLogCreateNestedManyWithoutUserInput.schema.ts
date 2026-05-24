import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EmailLogCreateWithoutUserInputObjectSchema as EmailLogCreateWithoutUserInputObjectSchema } from './EmailLogCreateWithoutUserInput.schema';
import { EmailLogUncheckedCreateWithoutUserInputObjectSchema as EmailLogUncheckedCreateWithoutUserInputObjectSchema } from './EmailLogUncheckedCreateWithoutUserInput.schema';
import { EmailLogCreateOrConnectWithoutUserInputObjectSchema as EmailLogCreateOrConnectWithoutUserInputObjectSchema } from './EmailLogCreateOrConnectWithoutUserInput.schema';
import { EmailLogCreateManyUserInputEnvelopeObjectSchema as EmailLogCreateManyUserInputEnvelopeObjectSchema } from './EmailLogCreateManyUserInputEnvelope.schema';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './EmailLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmailLogCreateWithoutUserInputObjectSchema), z.lazy(() => EmailLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => EmailLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => EmailLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EmailLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => EmailLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EmailLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EmailLogWhereUniqueInputObjectSchema), z.lazy(() => EmailLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EmailLogCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.EmailLogCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogCreateNestedManyWithoutUserInput>;
export const EmailLogCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
