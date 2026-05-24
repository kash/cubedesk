import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateWithoutUserInputObjectSchema as ProfileCreateWithoutUserInputObjectSchema } from './ProfileCreateWithoutUserInput.schema';
import { ProfileUncheckedCreateWithoutUserInputObjectSchema as ProfileUncheckedCreateWithoutUserInputObjectSchema } from './ProfileUncheckedCreateWithoutUserInput.schema';
import { ProfileCreateOrConnectWithoutUserInputObjectSchema as ProfileCreateOrConnectWithoutUserInputObjectSchema } from './ProfileCreateOrConnectWithoutUserInput.schema';
import { ProfileUpsertWithoutUserInputObjectSchema as ProfileUpsertWithoutUserInputObjectSchema } from './ProfileUpsertWithoutUserInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './ProfileWhereUniqueInput.schema';
import { ProfileUpdateToOneWithWhereWithoutUserInputObjectSchema as ProfileUpdateToOneWithWhereWithoutUserInputObjectSchema } from './ProfileUpdateToOneWithWhereWithoutUserInput.schema';
import { ProfileUpdateWithoutUserInputObjectSchema as ProfileUpdateWithoutUserInputObjectSchema } from './ProfileUpdateWithoutUserInput.schema';
import { ProfileUncheckedUpdateWithoutUserInputObjectSchema as ProfileUncheckedUpdateWithoutUserInputObjectSchema } from './ProfileUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProfileCreateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProfileUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => ProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => ProfileUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const ProfileUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ProfileUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateOneWithoutUserNestedInput>;
export const ProfileUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
