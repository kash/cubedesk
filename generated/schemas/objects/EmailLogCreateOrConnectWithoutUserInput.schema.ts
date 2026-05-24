import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './EmailLogWhereUniqueInput.schema';
import { EmailLogCreateWithoutUserInputObjectSchema as EmailLogCreateWithoutUserInputObjectSchema } from './EmailLogCreateWithoutUserInput.schema';
import { EmailLogUncheckedCreateWithoutUserInputObjectSchema as EmailLogUncheckedCreateWithoutUserInputObjectSchema } from './EmailLogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmailLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmailLogCreateWithoutUserInputObjectSchema), z.lazy(() => EmailLogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const EmailLogCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.EmailLogCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogCreateOrConnectWithoutUserInput>;
export const EmailLogCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
