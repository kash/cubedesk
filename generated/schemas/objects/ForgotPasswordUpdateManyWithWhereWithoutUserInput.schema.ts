import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ForgotPasswordScalarWhereInputObjectSchema as ForgotPasswordScalarWhereInputObjectSchema } from './ForgotPasswordScalarWhereInput.schema';
import { ForgotPasswordUpdateManyMutationInputObjectSchema as ForgotPasswordUpdateManyMutationInputObjectSchema } from './ForgotPasswordUpdateManyMutationInput.schema';
import { ForgotPasswordUncheckedUpdateManyWithoutUserInputObjectSchema as ForgotPasswordUncheckedUpdateManyWithoutUserInputObjectSchema } from './ForgotPasswordUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ForgotPasswordScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ForgotPasswordUpdateManyMutationInputObjectSchema), z.lazy(() => ForgotPasswordUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ForgotPasswordUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ForgotPasswordUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ForgotPasswordUpdateManyWithWhereWithoutUserInput>;
export const ForgotPasswordUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
