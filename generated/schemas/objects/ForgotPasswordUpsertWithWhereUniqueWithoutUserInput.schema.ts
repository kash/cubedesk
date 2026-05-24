import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ForgotPasswordWhereUniqueInputObjectSchema as ForgotPasswordWhereUniqueInputObjectSchema } from './ForgotPasswordWhereUniqueInput.schema';
import { ForgotPasswordUpdateWithoutUserInputObjectSchema as ForgotPasswordUpdateWithoutUserInputObjectSchema } from './ForgotPasswordUpdateWithoutUserInput.schema';
import { ForgotPasswordUncheckedUpdateWithoutUserInputObjectSchema as ForgotPasswordUncheckedUpdateWithoutUserInputObjectSchema } from './ForgotPasswordUncheckedUpdateWithoutUserInput.schema';
import { ForgotPasswordCreateWithoutUserInputObjectSchema as ForgotPasswordCreateWithoutUserInputObjectSchema } from './ForgotPasswordCreateWithoutUserInput.schema';
import { ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema as ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema } from './ForgotPasswordUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ForgotPasswordUpdateWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ForgotPasswordCreateWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ForgotPasswordUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ForgotPasswordUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordUpsertWithWhereUniqueWithoutUserInput>;
export const ForgotPasswordUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
