import {Button} from '@/components/ui/button';
import {ArrowLeft} from 'phosphor-react';
import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

export default function PublicTrainerHeader() {
	const {t} = useTranslation();
	return (
		<div className="border-tmo-module/10 bg-background relative mx-auto mb-10 h-[300px] w-full overflow-hidden rounded-[15px] border-4">
			<div className="absolute top-1/2 left-[30px] z-10 -translate-y-1/2">
				<h1 className="font-sans text-3xl font-medium tracking-tight">
					{t('trainer.trainerMarketplace')}
				</h1>
				<h3 className="mt-[5px] mb-2.5 font-medium opacity-80">
					{t('trainer.community.description')}
				</h3>
			</div>
			<div className="absolute top-5 left-[30px] z-10">
				<Button variant="link" size="sm" asChild>
					<Link to={'/trainer/333/OLL'}>
						<ArrowLeft />
						{t('trainer.backToTrainer')}
					</Link>
				</Button>
			</div>
			<img
				alt={t('trainer.floatingCubeAlt')}
				className="absolute top-1/2 left-1/2 z-0 h-full max-h-full w-full max-w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-40"
				src="https://cdn.cubedesk.io/storage/public_trainer_header.jpg"
			/>
		</div>
	);
}
