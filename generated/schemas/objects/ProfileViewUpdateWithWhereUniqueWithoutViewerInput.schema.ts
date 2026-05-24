import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewUpdateWithoutViewerInputObjectSchema as ProfileViewUpdateWithoutViewerInputObjectSchema } from './ProfileViewUpdateWithoutViewerInput.schema';
import { ProfileViewUncheckedUpdateWithoutViewerInputObjectSchema as ProfileViewUncheckedUpdateWithoutViewerInputObjectSchema } from './ProfileViewUncheckedUpdateWithoutViewerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProfileViewUpdateWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewUncheckedUpdateWithoutViewerInputObjectSchema)])
}).strict();
export const ProfileViewUpdateWithWhereUniqueWithoutViewerInputObjectSchema: z.ZodType<Prisma.ProfileViewUpdateWithWhereUniqueWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpdateWithWhereUniqueWithoutViewerInput>;
export const ProfileViewUpdateWithWhereUniqueWithoutViewerInputObjectZodSchema = makeSchema();
