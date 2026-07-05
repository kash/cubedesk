import {getIntegrationGetMe} from '@/server/integrations/oauth';
import {UserAccount} from '@/types/user';

interface DiscordMe {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	public_flags: number;
	flags: number;
	locale: string;
	mfa_enabled: boolean;
	email: string;
	verified: boolean;
}

export function getDiscordMe(user: UserAccount): Promise<DiscordMe> {
	return getIntegrationGetMe('discord', user);
}
