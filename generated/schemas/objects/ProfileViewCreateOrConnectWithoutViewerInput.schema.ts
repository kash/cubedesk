import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewWhereUniqueInputObjectSchema as ProfileViewWhereUniqueInputObjectSchema } from './ProfileViewWhereUniqueInput.schema';
import { ProfileViewCreateWithoutViewerInputObjectSchema as ProfileViewCreateWithoutViewerInputObjectSchema } from './ProfileViewCreateWithoutViewerInput.schema';
import { ProfileViewUncheckedCreateWithoutViewerInputObjectSchema as ProfileViewUncheckedCreateWithoutViewerInputObjectSchema } from './ProfileViewUncheckedCreateWithoutViewerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProfileViewCreateWithoutViewerInputObjectSchema), z.lazy(() => ProfileViewUncheckedCreateWithoutViewerInputObjectSchema)])
}).strict();
export const ProfileViewCreateOrConnectWithoutViewerInputObjectSchema: z.ZodType<Prisma.ProfileViewCreateOrConnectWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewCreateOrConnectWithoutViewerInput>;
export const ProfileViewCreateOrConnectWithoutViewerInputObjectZodSchema = makeSchema();
