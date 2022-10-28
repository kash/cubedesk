import React from 'react';
import './PublicTrainerHeader.scss';
import block from '../../../../styles/bem';
import LinkButton from '../../../common/button/LinkButton';
import {CommonType} from '../../../common/button/Button';

const b = block('public-trainer-header');

export default function PublicTrainerHeader() {
	return (
		<div className={b()}>
			<div className={b('center')}>
				<h1>Trainer Marketplace</h1>
				<h3>Download free trainer algorithms created by the amazing CubeDesk community.</h3>
			</div>
			<div className={b('back')}>
				<LinkButton
					theme={CommonType.WHITE}
					flat
					iconFirst
					icon="ph-arrow-left"
					text="Back to Trainer"
					to="/trainer/333/OLL"
				/>
			</div>
			<img
				alt="Floating Rubik's cube"
				className={b('background')}
				src="https://cdn.cubedesk.io/storage/public_trainer_header.jpg"
			/>
		</div>
	);
}
