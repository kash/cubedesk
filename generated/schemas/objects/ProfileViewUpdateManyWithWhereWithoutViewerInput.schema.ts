import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileViewScalarWhereInputObjectSchema as ProfileViewScalarWhereInputObjectSchema } from './ProfileViewScalarWhereInput.schema';
import { ProfileViewUpdateManyMutationInputObjectSchema as ProfileViewUpdateManyMutationInputObjectSchema } from './ProfileViewUpdateManyMutationInput.schema';
import { ProfileViewUncheckedUpdateManyWithoutViewerInputObjectSchema as ProfileViewUncheckedUpdateManyWithoutViewerInputObjectSchema } from './ProfileViewUncheckedUpdateManyWithoutViewerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProfileViewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProfileViewUpdateManyMutationInputObjectSchema), z.lazy(() => ProfileViewUncheckedUpdateManyWithoutViewerInputObjectSchema)])
}).strict();
export const ProfileViewUpdateManyWithWhereWithoutViewerInputObjectSchema: z.ZodType<Prisma.ProfileViewUpdateManyWithWhereWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpdateManyWithWhereWithoutViewerInput>;
export const ProfileViewUpdateManyWithWhereWithoutViewerInputObjectZodSchema = makeSchema();
