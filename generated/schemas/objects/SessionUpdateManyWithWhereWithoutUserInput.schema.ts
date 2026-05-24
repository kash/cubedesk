import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionScalarWhereInputObjectSchema as SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema';
import { SessionUpdateManyMutationInputObjectSchema as SessionUpdateManyMutationInputObjectSchema } from './SessionUpdateManyMutationInput.schema';
import { SessionUncheckedUpdateManyWithoutUserInputObjectSchema as SessionUncheckedUpdateManyWithoutUserInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SessionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SessionUpdateManyMutationInputObjectSchema), z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const SessionUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput>;
export const SessionUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
