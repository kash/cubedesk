import {Button} from '@/components/ui/button';
import './PublicTrainerHeader.scss';
import {ArrowLeft} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';
import block from '../../../../styles/bem';

const b = block('public-trainer-header');

export default function PublicTrainerHeader() {
	return (
		<div className={b()}>
			<div className={b('center')}>
				<h1>Trainer Marketplace</h1>
				<h3>Download free trainer algorithms created by the amazing CubeDesk community.</h3>
			</div>
			<div className={b('back')}>
				<Link href="/trainer/333/OLL">
					<Button variant="outline">
						<ArrowLeft />
						Back to Trainer
					</Button>
				</Link>
			</div>
			<img
				alt="Floating Rubik's cube"
				className={b('background')}
				src="https://cdn.cubedesk.io/storage/public_trainer_header.jpg"
			/>
		</div>
	);
}
