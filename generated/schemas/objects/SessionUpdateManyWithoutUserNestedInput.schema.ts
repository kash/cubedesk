import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateWithoutUserInputObjectSchema as SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema';
import { SessionUncheckedCreateWithoutUserInputObjectSchema as SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema';
import { SessionCreateOrConnectWithoutUserInputObjectSchema as SessionCreateOrConnectWithoutUserInputObjectSchema } from './SessionCreateOrConnectWithoutUserInput.schema';
import { SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema as SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './SessionUpsertWithWhereUniqueWithoutUserInput.schema';
import { SessionCreateManyUserInputEnvelopeObjectSchema as SessionCreateManyUserInputEnvelopeObjectSchema } from './SessionCreateManyUserInputEnvelope.schema';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema as SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './SessionUpdateWithWhereUniqueWithoutUserInput.schema';
import { SessionUpdateManyWithWhereWithoutUserInputObjectSchema as SessionUpdateManyWithWhereWithoutUserInputObjectSchema } from './SessionUpdateManyWithWhereWithoutUserInput.schema';
import { SessionScalarWhereInputObjectSchema as SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SessionCreateWithoutUserInputObjectSchema), z.lazy(() => SessionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SessionUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput>;
export const SessionUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
