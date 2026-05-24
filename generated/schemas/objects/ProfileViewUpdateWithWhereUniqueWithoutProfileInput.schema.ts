import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewUpdateWithoutProfileInputObjectSchema as ProfileViewUpdateWithoutProfileInputObjectSchema } from './ProfileViewUpdateWithoutProfileInput.schema';
import { ProfileViewUncheckedUpdateWithoutProfileInputObjectSchema as ProfileViewUncheckedUpdateWithoutProfileInputObjectSchema } from './ProfileViewUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProfileViewUpdateWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewUncheckedUpdateWithoutProfileInputObjectSchema)])
}).strict();
export const ProfileViewUpdateWithWhereUniqueWithoutProfileInputObjectSchema: z.ZodType<Prisma.ProfileViewUpdateWithWhereUniqueWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpdateWithWhereUniqueWithoutProfileInput>;
export const ProfileViewUpdateWithWhereUniqueWithoutProfileInputObjectZodSchema = makeSchema();
