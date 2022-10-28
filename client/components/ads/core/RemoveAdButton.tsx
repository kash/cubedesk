import React from 'react';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../actions/general';
import ProOnlyModal from '../../common/pro_only/ProOnlyModal';

interface Props {}

export default function RemoveAdButton(props: Props) {
	const dispatch = useDispatch();

	function openProModal() {
		dispatch(openModal(<ProOnlyModal />));
	}

	return (
		<div className="opacity-70 hover:opacity-100">
			<button onClick={openProModal} className="text-text text-sm flex flex-row items-center">
				<span className="mr-2">Remove ads with Pro</span>
			</button>
		</div>
	);
}
