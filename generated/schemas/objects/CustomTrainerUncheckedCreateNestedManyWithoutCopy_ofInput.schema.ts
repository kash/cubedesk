import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { CustomTrainerCreateWithoutCopy_ofInputObjectSchema as CustomTrainerCreateWithoutCopy_ofInputObjectSchema } from './CustomTrainerCreateWithoutCopy_ofInput.schema';
import { CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema as CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema } from './CustomTrainerUncheckedCreateWithoutCopy_ofInput.schema';
import { CustomTrainerCreateOrConnectWithoutCopy_ofInputObjectSchema as CustomTrainerCreateOrConnectWithoutCopy_ofInputObjectSchema } from './CustomTrainerCreateOrConnectWithoutCopy_ofInput.schema';
import { CustomTrainerCreateManyCopy_ofInputEnvelopeObjectSchema as CustomTrainerCreateManyCopy_ofInputEnvelopeObjectSchema } from './CustomTrainerCreateManyCopy_ofInputEnvelope.schema';
import { CustomTrainerWhereUniqueInputObjectSchema as CustomTrainerWhereUniqueInputObjectSchema } from './CustomTrainerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomTrainerCreateWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerCreateWithoutCopy_ofInputObjectSchema).array(), z.lazy(() => CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerUncheckedCreateWithoutCopy_ofInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomTrainerCreateOrConnectWithoutCopy_ofInputObjectSchema), z.lazy(() => CustomTrainerCreateOrConnectWithoutCopy_ofInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomTrainerCreateManyCopy_ofInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema), z.lazy(() => CustomTrainerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomTrainerUncheckedCreateNestedManyWithoutCopy_ofInputObjectSchema: z.ZodType<Prisma.CustomTrainerUncheckedCreateNestedManyWithoutCopy_ofInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomTrainerUncheckedCreateNestedManyWithoutCopy_ofInput>;
export const CustomTrainerUncheckedCreateNestedManyWithoutCopy_ofInputObjectZodSchema = makeSchema();
