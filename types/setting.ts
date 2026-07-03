import type {Prisma, Setting} from '@/generated/prisma/client';

export type {Setting};

export type SettingWithCustomCubeTypes = Prisma.SettingGetPayload<{
	include: {
		custom_cube_types: true;
	};
}>;
