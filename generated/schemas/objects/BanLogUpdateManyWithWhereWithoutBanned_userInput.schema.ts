import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { BanLogScalarWhereInputObjectSchema as BanLogScalarWhereInputObjectSchema } from './BanLogScalarWhereInput.schema';
import { BanLogUpdateManyMutationInputObjectSchema as BanLogUpdateManyMutationInputObjectSchema } from './BanLogUpdateManyMutationInput.schema';
import { BanLogUncheckedUpdateManyWithoutBanned_userInputObjectSchema as BanLogUncheckedUpdateManyWithoutBanned_userInputObjectSchema } from './BanLogUncheckedUpdateManyWithoutBanned_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BanLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BanLogUpdateManyMutationInputObjectSchema), z.lazy(() => BanLogUncheckedUpdateManyWithoutBanned_userInputObjectSchema)])
}).strict();
export const BanLogUpdateManyWithWhereWithoutBanned_userInputObjectSchema: z.ZodType<Prisma.BanLogUpdateManyWithWhereWithoutBanned_userInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogUpdateManyWithWhereWithoutBanned_userInput>;
export const BanLogUpdateManyWithWhereWithoutBanned_userInputObjectZodSchema = makeSchema();
