import {useTranslation} from 'react-i18next';
import React from 'react';

interface Props {
	cube: {
		id: string;
		name: string;
		created_at: Date | string;
		solves: {id: string}[];
	};
}

export default function SmartManage(props: Props) {
	const {t, i18n} = useTranslation();
	const {cube} = props;
	const solveCount = cube.solves.length;

	return (
		<div className="border-button flex w-full flex-row items-start justify-between border-b-2 py-[15px] last:border-b-0">
			<div>
				<h4 className="text-text text-[1.1rem] font-semibold">{cube.name}</h4>
				<h5 className="text-text text-[0.9rem] font-normal opacity-80">
					{t('timer.smartCube.addedOnDate', {
						date: new Date(cube.created_at).toLocaleDateString(i18n.language, {
							month: 'short',
							day: 'numeric',
							year: 'numeric',
						}),
					})}
				</h5>
			</div>
			<div>
				<p className="text-text text-base">
					{t('timer.smartCube.solveCount', {count: solveCount})}
				</p>
			</div>
		</div>
	);
}
