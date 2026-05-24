import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewScalarWhereInputObjectSchema as ProfileViewScalarWhereInputObjectSchema } from './ProfileViewScalarWhereInput.schema';
import { ProfileViewUpdateManyMutationInputObjectSchema as ProfileViewUpdateManyMutationInputObjectSchema } from './ProfileViewUpdateManyMutationInput.schema';
import { ProfileViewUncheckedUpdateManyWithoutProfile_userInputObjectSchema as ProfileViewUncheckedUpdateManyWithoutProfile_userInputObjectSchema } from './ProfileViewUncheckedUpdateManyWithoutProfile_userInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProfileViewUpdateManyMutationInputObjectSchema), z.lazy(() => ProfileViewUncheckedUpdateManyWithoutProfile_userInputObjectSchema)])
}).strict();
export const ProfileViewUpdateManyWithWhereWithoutProfile_userInputObjectSchema: z.ZodType<Prisma.ProfileViewUpdateManyWithWhereWithoutProfile_userInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpdateManyWithWhereWithoutProfile_userInput>;
export const ProfileViewUpdateManyWithWhereWithoutProfile_userInputObjectZodSchema = makeSchema();
