import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogCreateWithoutBanned_userInputObjectSchema as BanLogCreateWithoutBanned_userInputObjectSchema } from './BanLogCreateWithoutBanned_userInput.schema';
import { BanLogUncheckedCreateWithoutBanned_userInputObjectSchema as BanLogUncheckedCreateWithoutBanned_userInputObjectSchema } from './BanLogUncheckedCreateWithoutBanned_userInput.schema';
import { BanLogCreateOrConnectWithoutBanned_userInputObjectSchema as BanLogCreateOrConnectWithoutBanned_userInputObjectSchema } from './BanLogCreateOrConnectWithoutBanned_userInput.schema';
import { BanLogCreateManyBanned_userInputEnvelopeObjectSchema as BanLogCreateManyBanned_userInputEnvelopeObjectSchema } from './BanLogCreateManyBanned_userInputEnvelope.schema';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './BanLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BanLogCreateWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogCreateWithoutBanned_userInputObjectSchema).array(), z.lazy(() => BanLogUncheckedCreateWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogUncheckedCreateWithoutBanned_userInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BanLogCreateOrConnectWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogCreateOrConnectWithoutBanned_userInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BanLogCreateManyBanned_userInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BanLogWhereUniqueInputObjectSchema), z.lazy(() => BanLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BanLogCreateNestedManyWithoutBanned_userInputObjectSchema: z.ZodType<Prisma.BanLogCreateNestedManyWithoutBanned_userInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateNestedManyWithoutBanned_userInput>;
export const BanLogCreateNestedManyWithoutBanned_userInputObjectZodSchema = makeSchema();
