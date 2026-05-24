import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EmailLogWhereUniqueInputObjectSchema as EmailLogWhereUniqueInputObjectSchema } from './EmailLogWhereUniqueInput.schema';
import { EmailLogUpdateWithoutUserInputObjectSchema as EmailLogUpdateWithoutUserInputObjectSchema } from './EmailLogUpdateWithoutUserInput.schema';
import { EmailLogUncheckedUpdateWithoutUserInputObjectSchema as EmailLogUncheckedUpdateWithoutUserInputObjectSchema } from './EmailLogUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmailLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EmailLogUpdateWithoutUserInputObjectSchema), z.lazy(() => EmailLogUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const EmailLogUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.EmailLogUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EmailLogUpdateWithWhereUniqueWithoutUserInput>;
export const EmailLogUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
