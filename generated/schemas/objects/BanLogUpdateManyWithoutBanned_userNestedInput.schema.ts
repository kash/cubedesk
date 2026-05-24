import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogCreateWithoutBanned_userInputObjectSchema as BanLogCreateWithoutBanned_userInputObjectSchema } from './BanLogCreateWithoutBanned_userInput.schema';
import { BanLogUncheckedCreateWithoutBanned_userInputObjectSchema as BanLogUncheckedCreateWithoutBanned_userInputObjectSchema } from './BanLogUncheckedCreateWithoutBanned_userInput.schema';
import { BanLogCreateOrConnectWithoutBanned_userInputObjectSchema as BanLogCreateOrConnectWithoutBanned_userInputObjectSchema } from './BanLogCreateOrConnectWithoutBanned_userInput.schema';
import { BanLogUpsertWithWhereUniqueWithoutBanned_userInputObjectSchema as BanLogUpsertWithWhereUniqueWithoutBanned_userInputObjectSchema } from './BanLogUpsertWithWhereUniqueWithoutBanned_userInput.schema';
import { BanLogCreateManyBanned_userInputEnvelopeObjectSchema as BanLogCreateManyBanned_userInputEnvelopeObjectSchema } from './BanLogCreateManyBanned_userInputEnvelope.schema';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './BanLogWhereUniqueInput.schema';
import { BanLogUpdateWithWhereUniqueWithoutBanned_userInputObjectSchema as BanLogUpdateWithWhereUniqueWithoutBanned_userInputObjectSchema } from './BanLogUpdateWithWhereUniqueWithoutBanned_userInput.schema';
import { BanLogUpdateManyWithWhereWithoutBanned_userInputObjectSchema as BanLogUpdateManyWithWhereWithoutBanned_userInputObjectSchema } from './BanLogUpdateManyWithWhereWithoutBanned_userInput.schema';
import { BanLogScalarWhereInputObjectSchema as BanLogScalarWhereInputObjectSchema } from './BanLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanLogCreateWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogCreateWithoutBanned_userInputObjectSchema).array(), z.lazy(() => BanLogUncheckedCreateWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogUncheckedCreateWithoutBanned_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanLogCreateOrConnectWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogCreateOrConnectWithoutBanned_userInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => BanLogUpsertWithWhereUniqueWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogUpsertWithWhereUniqueWithoutBanned_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanLogCreateManyBanned_userInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => BanLogWhereUniqueInputObjectSchema), z.lazy(() => BanLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => BanLogWhereUniqueInputObjectSchema), z.lazy(() => BanLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => BanLogWhereUniqueInputObjectSchema), z.lazy(() => BanLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => BanLogWhereUniqueInputObjectSchema), z.lazy(() => BanLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => BanLogUpdateWithWhereUniqueWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogUpdateWithWhereUniqueWithoutBanned_userInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => BanLogUpdateManyWithWhereWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogUpdateManyWithWhereWithoutBanned_userInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => BanLogScalarWhereInputObjectSchema), z.lazy(() => BanLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const BanLogUpdateManyWithoutBanned_userNestedInputObjectSchema: z.ZodType<Prisma.BanLogUpdateManyWithoutBanned_userNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogUpdateManyWithoutBanned_userNestedInput>;
export const BanLogUpdateManyWithoutBanned_userNestedInputObjectZodSchema = makeSchema();
