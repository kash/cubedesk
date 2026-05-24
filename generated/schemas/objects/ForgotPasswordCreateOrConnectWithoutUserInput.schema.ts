import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ForgotPasswordWhereUniqueInputObjectSchema as ForgotPasswordWhereUniqueInputObjectSchema } from './ForgotPasswordWhereUniqueInput.schema';
import { ForgotPasswordCreateWithoutUserInputObjectSchema as ForgotPasswordCreateWithoutUserInputObjectSchema } from './ForgotPasswordCreateWithoutUserInput.schema';
import { ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema as ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema } from './ForgotPasswordUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ForgotPasswordWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ForgotPasswordCreateWithoutUserInputObjectSchema), z.lazy(() => ForgotPasswordUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ForgotPasswordCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ForgotPasswordCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordCreateOrConnectWithoutUserInput>;
export const ForgotPasswordCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
