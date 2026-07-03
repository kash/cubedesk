import {PublicUserAccount, UserAccount} from '@/types/user';

export function isPro(user: UserAccount | PublicUserAccount): boolean {
	if (!user) {
		return false;
	}

	return !!user.is_pro;
}

export function isNotPro(user: UserAccount | PublicUserAccount): boolean {
	return !isPro(user);
}
