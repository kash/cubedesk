import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EmailLogCreateWithoutUserInputObjectSchema as EmailLogCreateWithoutUserInputObjectSchema } from './EmailLogCreateWithoutUserInput.schema';
import { EmailLogUncheckedCreateWithoutUserInputObjectSchema as EmailLogUncheckedCreateWithoutUserInputObjectSchema } from './EmailLogUncheckedCreateWithoutUserInput.schema';
import { EmailLogCreateOrConnectWithoutUserInputObjectSchema as EmailLogCreateOrConnectWithoutUserInputObjectSchema } from './EmailLogCreateOrConnectWithoutUserInput.schema';
import { EmailLogUpsertWithWhereUniqueWithoutUserInputObjectSchema as EmailLogUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './EmailLogUpsertWithWhereUniqueWithoutUserInput.schema';
import { EmailLogCreateManyUserInputEnvelopeObjectSchema as EmailLogCreateManyUserInputEnvelopeObjectSchema } from './EmailLogCreateManyUserInputEnvelope.schema';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './EmailLogWhereUniqueInput.schema';
import { EmailLogUpdateWithWhereUniqueWithoutUserInputObjectSchema as EmailLogUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './EmailLogUpdateWithWhereUniqueWithoutUserInput.schema';
import { EmailLogUpdateManyWithWhereWithoutUserInputObjectSchema as EmailLogUpdateManyWithWhereWithoutUserInputObjectSchema } from './EmailLogUpdateManyWithWhereWithoutUserInput.schema';
import { EmailLogScalarWhereInputObjectSchema as EmailLogScalarWhereInputObjectSchema } from './EmailLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmailLogCreateWithoutUserInputObjectSchema), z.lazy(() => EmailLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => EmailLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => EmailLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EmailLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => EmailLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EmailLogUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => EmailLogUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EmailLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EmailLogWhereUniqueInputObjectSchema), z.lazy(() => EmailLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EmailLogWhereUniqueInputObjectSchema), z.lazy(() => EmailLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EmailLogWhereUniqueInputObjectSchema), z.lazy(() => EmailLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EmailLogWhereUniqueInputObjectSchema), z.lazy(() => EmailLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EmailLogUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => EmailLogUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EmailLogUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => EmailLogUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EmailLogScalarWhereInputObjectSchema), z.lazy(() => EmailLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EmailLogUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.EmailLogUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogUpdateManyWithoutUserNestedInput>;
export const EmailLogUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
