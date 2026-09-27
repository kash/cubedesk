import CubePicker from '@/components/common/CubePicker';
import HorizontalNav from '@/components/common/HorizontalNav';
import {MatchPopupPage, useMatchPopupContext} from '@/components/play/match/match-popup/MatchPopup';
import {Button} from '@/components/ui/button';
import {CubeType} from '@/util/cubes/cube_types';
import {ArrowRight} from 'phosphor-react';
import {useTranslation} from 'react-i18next';
import React from 'react';

export default function CustomMatchOptions() {
	const {t} = useTranslation();
	const context = useMatchPopupContext();

	function selectPlayerCount(val: string) {
		const count = parseInt(val);
		context.setMaxPlayers(count);
		context.setMinPlayers(count);
	}

	function selectCubeType(ct: CubeType) {
		context.setCubeType(ct.id);
	}

	function createMatch() {
		context.setPage(MatchPopupPage.CUSTOM);
	}

	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-5">
			<div className="border-tmo-module/10 box-border flex flex-col items-start rounded border-[3px] p-[15px]">
				<div className="mb-1">
					<h3>{t('community.cubeType')}</h3>
				</div>
				<CubePicker
					labels={{
						label: t('common.cubeType2'),
						placeholder: t('common.selectOption'),
						searchPlaceholder: t('common.search'),
						emptyMessage: t('common.noResultsFound'),
					}}
					excludeCustomCubeTypes
					excludeOtherCubeType
					value={context.cubeType}
					onChange={selectCubeType}
					pickerProps={{
						openLeft: true,
						triggerProps: {
							className: 'h-10',
						},
					}}
				/>
			</div>
			<div className="border-tmo-module/10 box-border flex flex-col items-start rounded border-[3px] p-[15px]">
				<div className="mb-1">
					<h3>{t('community.players')}</h3>
					<p>{t('community.match.requiredPlayersHint')}</p>
				</div>
				<HorizontalNav
					tabId={String(context.minPlayers)}
					onChange={selectPlayerCount}
					tabs={[2, 3, 4, 5, 6].map((num) => ({
						id: String(num),
						value: String(num),
					}))}
				/>
			</div>
			<div className="mt-5 w-full justify-end">
				<Button variant="default" onClick={createMatch} size="lg">
					{t('community.createCustomMatch')}
					<ArrowRight />
				</Button>
			</div>
		</div>
	);
}
