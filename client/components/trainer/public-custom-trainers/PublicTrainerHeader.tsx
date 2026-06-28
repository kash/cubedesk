import React from 'react';
import {ArrowLeft} from 'phosphor-react';
import LinkButton from '@/components/common/button/LinkButton';
import {CommonType} from '@/components/common/button/Button';

export default function PublicTrainerHeader() {
	return (
		<div className="relative mx-auto mb-10 h-[300px] w-full overflow-hidden rounded-[15px] border-4 border-tmo-module/10 bg-background">
			<div className="absolute left-[30px] top-1/2 z-10 -translate-y-1/2">
				<h1>Trainer Marketplace</h1>
				<h3 className="mb-2.5 mt-[5px] font-medium opacity-80">
					Download free trainer algorithms created by the amazing CubeDesk community.
				</h3>
			</div>
			<div className="absolute left-[30px] top-5 z-10">
				<LinkButton
					theme={CommonType.WHITE}
					flat
					iconFirst
					icon={<ArrowLeft />}
					text="Back to Trainer"
					to="/trainer/333/OLL"
				/>
			</div>
			<img
				alt="Floating Rubik's cube"
				className="absolute left-1/2 top-1/2 z-0 h-full max-h-full w-full max-w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-40"
				src="https://cdn.cubedesk.io/storage/public_trainer_header.jpg"
			/>
		</div>
	);
}
