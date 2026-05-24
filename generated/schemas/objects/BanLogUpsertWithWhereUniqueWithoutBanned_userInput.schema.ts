import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './BanLogWhereUniqueInput.schema';
import { BanLogUpdateWithoutBanned_userInputObjectSchema as BanLogUpdateWithoutBanned_userInputObjectSchema } from './BanLogUpdateWithoutBanned_userInput.schema';
import { BanLogUncheckedUpdateWithoutBanned_userInputObjectSchema as BanLogUncheckedUpdateWithoutBanned_userInputObjectSchema } from './BanLogUncheckedUpdateWithoutBanned_userInput.schema';
import { BanLogCreateWithoutBanned_userInputObjectSchema as BanLogCreateWithoutBanned_userInputObjectSchema } from './BanLogCreateWithoutBanned_userInput.schema';
import { BanLogUncheckedCreateWithoutBanned_userInputObjectSchema as BanLogUncheckedCreateWithoutBanned_userInputObjectSchema } from './BanLogUncheckedCreateWithoutBanned_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => BanLogUpdateWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogUncheckedUpdateWithoutBanned_userInputObjectSchema)]),
  create: z.union([z.lazy(() => BanLogCreateWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogUncheckedCreateWithoutBanned_userInputObjectSchema)])
}).strict();
export const BanLogUpsertWithWhereUniqueWithoutBanned_userInputObjectSchema: z.ZodType<Prisma.BanLogUpsertWithWhereUniqueWithoutBanned_userInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogUpsertWithWhereUniqueWithoutBanned_userInput>;
export const BanLogUpsertWithWhereUniqueWithoutBanned_userInputObjectZodSchema = makeSchema();
