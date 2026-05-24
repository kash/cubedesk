import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewUpdateWithoutViewerInputObjectSchema as ProfileViewUpdateWithoutViewerInputObjectSchema } from './ProfileViewUpdateWithoutViewerInput.schema';
import { ProfileViewUncheckedUpdateWithoutViewerInputObjectSchema as ProfileViewUncheckedUpdateWithoutViewerInputObjectSchema } from './ProfileViewUncheckedUpdateWithoutViewerInput.schema';
import { ProfileViewCreateWithoutViewerInputObjectSchema as ProfileViewCreateWithoutViewerInputObjectSchema } from './ProfileViewCreateWithoutViewerInput.schema';
import { ProfileViewUncheckedCreateWithoutViewerInputObjectSchema as ProfileViewUncheckedCreateWithoutViewerInputObjectSchema } from './ProfileViewUncheckedCreateWithoutViewerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProfileViewUpdateWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewUncheckedUpdateWithoutViewerInputObjectSchema)]),
  create: z.union([z.lazy(() => ProfileViewCreateWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutViewerInputObjectSchema)])
}).strict();
export const ProfileViewUpsertWithWhereUniqueWithoutViewerInputObjectSchema: z.ZodType<Prisma.ProfileViewUpsertWithWhereUniqueWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpsertWithWhereUniqueWithoutViewerInput>;
export const ProfileViewUpsertWithWhereUniqueWithoutViewerInputObjectZodSchema = makeSchema();
