import React, {ReactNode} from 'react';
import classNames from 'classnames';
import jsonStr from 'json-stable-stringify';
import {useDispatch} from 'react-redux';
import {setSetting} from '@/db/settings/update';
import {useMe} from '@/util/hooks/useMe';
import Tag from '@/components/common/Tag';
import {openModal} from '@/actions/general';
import ProOnlyModal from '@/components/common/pro_only/ProOnlyModal';
import {Lock} from 'phosphor-react';
import {getSetting} from '@/db/settings/query';
import {APP_THEME_PRESETS, PresetThemeValues} from '@/util/themes/theme_consts';
import {isNotPro} from '@/util/pro';

interface Props {
	theme: keyof PresetThemeValues;
}

export default function ThemeOption(props: Props) {
	const dispatch = useDispatch();
	const me = useMe();

	const theme = APP_THEME_PRESETS[props.theme];
	const selected = jsonStr(theme.values) === getCurrentTheme();

	function getCurrentTheme() {
		const currentVals = {};
		for (const key of Object.keys(theme.values)) {
			currentVals[key] = getSetting(key as any);
		}

		return jsonStr(currentVals);
	}

	function selectTheme() {
		if (theme.proOnly && isNotPro(me)) {
			dispatch(openModal(<ProOnlyModal />));
			return;
		}

		for (const key of Object.keys(theme.values)) {
			const col = theme.values[key];
			setSetting(key as any, col);
		}
	}

	let proLock: ReactNode = null;
	if (theme.proOnly && isNotPro(me)) {
		proLock = (
			<div className="absolute top-1/2 right-5 -translate-y-1/2">
				<Tag
					small
					icon={<Lock weight="fill" />}
					text="Pro Theme"
					backgroundColor="primary"
				/>
			</div>
		);
	}

	return (
		<button
			className={classNames(
				'border-button/90 bg-button/40 relative mr-3 mb-3 flex w-full flex-row items-center rounded-[30px] border-4 px-[30px] py-3 hover:opacity-80',
				selected && 'border-primary',
			)}
			onClick={selectTheme}
		>
			<div className="border-tmo-background/30 relative mr-2.5 table h-[30px] w-10 overflow-hidden rounded-[5px] border-2">
				<div className="absolute top-1/2 left-[57%] flex -translate-x-1/2 -translate-y-1/2 rotate-[25deg] flex-row items-center">
					<span
						className="box-border table h-[60px] w-[60px]"
						style={{
							backgroundColor: 'rgb(' + theme.values.background_color + ')',
							border: '3px solid rgb(' + theme.values.text_color + ')',
						}}
					/>
					<span
						className="box-border table h-[60px] w-[60px]"
						style={{
							backgroundColor: 'rgb(' + theme.values.module_color + ')',
						}}
					/>
				</div>
			</div>
			<p className="text-text m-0 text-[1.2rem] font-bold opacity-100 transition-all duration-100 ease-in-out">
				{theme.name}
			</p>
			{proLock}
		</button>
	);
}
