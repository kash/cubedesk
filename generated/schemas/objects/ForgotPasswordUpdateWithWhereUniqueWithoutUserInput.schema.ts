import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ForgotPasswordWhereUniqueInputObjectSchema as ForgotPasswordWhereUniqueInputObjectSchema } from './ForgotPasswordWhereUniqueInput.schema';
import { ForgotPasswordUpdateWithoutUserInputObjectSchema as ForgotPasswordUpdateWithoutUserInputObjectSchema } from './ForgotPasswordUpdateWithoutUserInput.schema';
import { ForgotPasswordUncheckedUpdateWithoutUserInputObjectSchema as ForgotPasswordUncheckedUpdateWithoutUserInputObjectSchema } from './ForgotPasswordUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ForgotPasswordUpdateWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ForgotPasswordUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ForgotPasswordUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordUpdateWithWhereUniqueWithoutUserInput>;
export const ForgotPasswordUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
