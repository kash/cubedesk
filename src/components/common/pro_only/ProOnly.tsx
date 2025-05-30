import {openModal} from '@/lib/actions/general';
import {useMe} from '@/lib/util/hooks/useMe';
import {isPro} from '@/lib/util/pro';
import React, {ReactNode, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import Cover from '../cover/Cover';
import ProOnlyModal from './ProOnlyModal';

interface Props {
	forceShow?: boolean;
	ignore?: boolean;
	noPadding?: boolean;
	children: ReactNode;
	lockIconOnly?: boolean;
}

export default function ProOnly(props: Props) {
	const {lockIconOnly, forceShow, children, ignore, noPadding} = props;
	const dispatch = useDispatch();
	const me = useMe();

	const shouldHide = (isPro(me) || ignore) && !forceShow;

	const handleClick = useCallback(() => {
		if (shouldHide) {
			return;
		}

		dispatch(openModal(<ProOnlyModal />));
	}, [shouldHide, dispatch]);

	if (shouldHide) {
		return <>{children}</>;
	}

	return (
		<Cover
			tagText={lockIconOnly ? undefined : 'Pro Feature'}
			noPadding={noPadding}
			onClick={handleClick}
		>
			{children}
		</Cover>
	);
}
