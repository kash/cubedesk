import {useTranslation} from 'react-i18next';
import AuthDialog from '@/components/login/AuthDialog';
import {useMe} from '@/util/hooks/useMe';
import React from 'react';

export default function DemoWarning() {
	const {t} = useTranslation();
	const me = useMe();

	if (me) {
		return null;
	}

	return (
		<div className="text-center text-base font-normal text-gray-500">
			<AuthDialog view="signup">
				<button type="button" className="p-0 text-base text-gray-500 hover:text-gray-400">
					{t('auth.demoModeSignUpToSaveSolves')}
				</button>
			</AuthDialog>
		</div>
	);
}
