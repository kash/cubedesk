import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutViewsNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutViewsNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutViewsNestedInput.schema';
import { UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInputObjectSchema as UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInputObjectSchema } from './UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInput.schema';
import { UserAccountUpdateOneWithoutViewed_profilesNestedInputObjectSchema as UserAccountUpdateOneWithoutViewed_profilesNestedInputObjectSchema } from './UserAccountUpdateOneWithoutViewed_profilesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutViewsNestedInputObjectSchema).optional(),
  profile_user: z.lazy(() => UserAccountUpdateOneRequiredWithoutProfile_viewsNestedInputObjectSchema).optional(),
  viewer: z.lazy(() => UserAccountUpdateOneWithoutViewed_profilesNestedInputObjectSchema).optional()
}).strict();
export const ProfileViewUpdateInputObjectSchema: z.ZodType<Prisma.ProfileViewUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileViewUpdateInput>;
export const ProfileViewUpdateInputObjectZodSchema = makeSchema();
