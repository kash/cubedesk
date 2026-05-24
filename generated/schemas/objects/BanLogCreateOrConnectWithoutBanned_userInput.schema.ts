import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './BanLogWhereUniqueInput.schema';
import { BanLogCreateWithoutBanned_userInputObjectSchema as BanLogCreateWithoutBanned_userInputObjectSchema } from './BanLogCreateWithoutBanned_userInput.schema';
import { BanLogUncheckedCreateWithoutBanned_userInputObjectSchema as BanLogUncheckedCreateWithoutBanned_userInputObjectSchema } from './BanLogUncheckedCreateWithoutBanned_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BanLogCreateWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogUncheckedCreateWithoutBanned_userInputObjectSchema)])
}).strict();
export const BanLogCreateOrConnectWithoutBanned_userInputObjectSchema: z.ZodType<Prisma.BanLogCreateOrConnectWithoutBanned_userInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogCreateOrConnectWithoutBanned_userInput>;
export const BanLogCreateOrConnectWithoutBanned_userInputObjectZodSchema = makeSchema();
