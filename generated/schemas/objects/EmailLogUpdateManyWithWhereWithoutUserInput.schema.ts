import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EmailLogScalarWhereInputObjectSchema as EmailLogScalarWhereInputObjectSchema } from './EmailLogScalarWhereInput.schema';
import { EmailLogUpdateManyMutationInputObjectSchema as EmailLogUpdateManyMutationInputObjectSchema } from './EmailLogUpdateManyMutationInput.schema';
import { EmailLogUncheckedUpdateManyWithoutUserInputObjectSchema as EmailLogUncheckedUpdateManyWithoutUserInputObjectSchema } from './EmailLogUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmailLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EmailLogUpdateManyMutationInputObjectSchema), z.lazy(() => EmailLogUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const EmailLogUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.EmailLogUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogUpdateManyWithWhereWithoutUserInput>;
export const EmailLogUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
