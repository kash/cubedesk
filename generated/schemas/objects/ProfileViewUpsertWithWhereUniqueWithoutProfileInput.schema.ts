import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewUpdateWithoutProfileInputObjectSchema as ProfileViewUpdateWithoutProfileInputObjectSchema } from './ProfileViewUpdateWithoutProfileInput.schema';
import { ProfileViewUncheckedUpdateWithoutProfileInputObjectSchema as ProfileViewUncheckedUpdateWithoutProfileInputObjectSchema } from './ProfileViewUncheckedUpdateWithoutProfileInput.schema';
import { ProfileViewCreateWithoutProfileInputObjectSchema as ProfileViewCreateWithoutProfileInputObjectSchema } from './ProfileViewCreateWithoutProfileInput.schema';
import { ProfileViewUncheckedCreateWithoutProfileInputObjectSchema as ProfileViewUncheckedCreateWithoutProfileInputObjectSchema } from './ProfileViewUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProfileViewUpdateWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewUncheckedUpdateWithoutProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileViewCreateWithoutProfileInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const ProfileViewUpsertWithWhereUniqueWithoutProfileInputObjectSchema: z.ZodType<Prisma.ProfileViewUpsertWithWhereUniqueWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpsertWithWhereUniqueWithoutProfileInput>;
export const ProfileViewUpsertWithWhereUniqueWithoutProfileInputObjectZodSchema = makeSchema();
