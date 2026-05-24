import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInput.schema';
import { UserAccountUpdateOneWithoutViewed_profilesNestedInputObjectSchema as UserAccountUpdateOneWithoutViewed_profilesNestedInputObjectSchema } from './UserAccountUpdateOneWithoutViewed_profilesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  profile_user: z.lazy(() => UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInputObjectSchema).optional(),
  viewer: z.lazy(() => UserAccountUpdateOneWithoutViewed_profilesNestedInputObjectSchema).optional()
}).strict();
export const ProfileViewUpdateWithoutProfileInputObjectSchema: z.ZodType<Prisma.ProfileViewUpdateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpdateWithoutProfileInput>;
export const ProfileViewUpdateWithoutProfileInputObjectZodSchema = makeSchema();
