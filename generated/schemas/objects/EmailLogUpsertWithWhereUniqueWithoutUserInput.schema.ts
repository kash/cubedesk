import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './EmailLogWhereUniqueInput.schema';
import { EmailLogUpdateWithoutUserInputObjectSchema as EmailLogUpdateWithoutUserInputObjectSchema } from './EmailLogUpdateWithoutUserInput.schema';
import { EmailLogUncheckedUpdateWithoutUserInputObjectSchema as EmailLogUncheckedUpdateWithoutUserInputObjectSchema } from './EmailLogUncheckedUpdateWithoutUserInput.schema';
import { EmailLogCreateWithoutUserInputObjectSchema as EmailLogCreateWithoutUserInputObjectSchema } from './EmailLogCreateWithoutUserInput.schema';
import { EmailLogUncheckedCreateWithoutUserInputObjectSchema as EmailLogUncheckedCreateWithoutUserInputObjectSchema } from './EmailLogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmailLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EmailLogUpdateWithoutUserInputObjectSchema), z.lazy(() => EmailLogUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => EmailLogCreateWithoutUserInputObjectSchema), z.lazy(() => EmailLogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const EmailLogUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.EmailLogUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogUpsertWithWhereUniqueWithoutUserInput>;
export const EmailLogUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
