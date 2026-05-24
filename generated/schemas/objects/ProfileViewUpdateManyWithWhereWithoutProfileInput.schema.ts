import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewScalarWhereInputObjectSchema as ProfileViewScalarWhereInputObjectSchema } from './ProfileViewScalarWhereInput.schema';
import { ProfileViewUpdateManyMutationInputObjectSchema as ProfileViewUpdateManyMutationInputObjectSchema } from './ProfileViewUpdateManyMutationInput.schema';
import { ProfileViewUncheckedUpdateManyWithoutProfileInputObjectSchema as ProfileViewUncheckedUpdateManyWithoutProfileInputObjectSchema } from './ProfileViewUncheckedUpdateManyWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProfileViewUpdateManyMutationInputObjectSchema), z.lazy(() => ProfileViewUncheckedUpdateManyWithoutProfileInputObjectSchema)])
}).strict();
export const ProfileViewUpdateManyWithWhereWithoutProfileInputObjectSchema: z.ZodType<Prisma.ProfileViewUpdateManyWithWhereWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpdateManyWithWhereWithoutProfileInput>;
export const ProfileViewUpdateManyWithWhereWithoutProfileInputObjectZodSchema = makeSchema();
