import React, {ReactNode} from 'react';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../actions/general';
import ProOnlyModal from './ProOnlyModal';
import {useMe} from '../../../util/hooks/useMe';
import {isPro} from '../../../util/pro';
import Cover from '../cover/Cover';

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

	if ((isPro(me) || ignore) && !forceShow) {
		return <>{children}</>;
	}

	function onClick(e) {
		e.preventDefault();

		dispatch(openModal(<ProOnlyModal />));
	}

	return (
		<Cover tagText={lockIconOnly ? null : 'Pro Feature'} noPadding={noPadding} onClick={onClick}>
			{children}
		</Cover>
	);
}
