import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogWhereUniqueInputObjectSchema as BanLogWhereUniqueInputObjectSchema } from './BanLogWhereUniqueInput.schema';
import { BanLogUpdateWithoutBanned_userInputObjectSchema as BanLogUpdateWithoutBanned_userInputObjectSchema } from './BanLogUpdateWithoutBanned_userInput.schema';
import { BanLogUncheckedUpdateWithoutBanned_userInputObjectSchema as BanLogUncheckedUpdateWithoutBanned_userInputObjectSchema } from './BanLogUncheckedUpdateWithoutBanned_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => BanLogUpdateWithoutBanned_userInputObjectSchema), z.lazy(() => BanLogUncheckedUpdateWithoutBanned_userInputObjectSchema)])
}).strict();
export const BanLogUpdateWithWhereUniqueWithoutBanned_userInputObjectSchema: z.ZodType<Prisma.BanLogUpdateWithWhereUniqueWithoutBanned_userInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogUpdateWithWhereUniqueWithoutBanned_userInput>;
export const BanLogUpdateWithWhereUniqueWithoutBanned_userInputObjectZodSchema = makeSchema();
