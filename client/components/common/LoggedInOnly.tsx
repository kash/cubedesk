import Cover from '@/components/common/Cover';
import {useMe} from '@/util/hooks/useMe';
import React, {ReactNode} from 'react';
import {useHistory} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

interface Props {
	ignore?: boolean;
	noPadding?: boolean;
	children: ReactNode;
}

export default function LoggedInOnly(props: Props) {
	const {t} = useTranslation();
	const {children, ignore, noPadding} = props;

	const history = useHistory();
	const me = useMe();

	if (me || ignore) {
		return <>{children}</>;
	}

	function onClick(e) {
		e.preventDefault();

		history.push('/signup');
	}

	return (
		<Cover tagText={t('auth.signUp')} noPadding={noPadding} onClick={onClick}>
			{children}
		</Cover>
	);
}
