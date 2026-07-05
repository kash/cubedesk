import Input from '@/components/common/inputs/input/Input';
import LoggedInOnly from '@/components/common/LoggedInOnly';
import Switch from '@/components/common/Switch';
import {AllSettings} from '@/db/settings/query';
import {setSetting} from '@/db/settings/update';
import {useInput} from '@/util/hooks/useInput';
import {useSettings} from '@/util/hooks/useSettings';
import {toastError} from '@/util/toast';
import classNames from 'classnames';
import React, {ReactNode} from 'react';

interface Props {
	title: string;
	settingName?: keyof AllSettings;
	description?: string;
	isSwitch?: boolean;
	sub?: boolean;
	loggedInOnly?: boolean;
	vertical?: boolean;
	isNumberInput?: boolean;
	parent?: boolean;
	step?: number;
	children?: ReactNode;
	nested?: boolean;
}

export default function SettingRow(props: Props) {
	const {
		children,
		loggedInOnly,
		isNumberInput,
		parent,
		sub,
		vertical,
		step,
		nested,
		title,
		description,
		settingName,
		isSwitch,
	} = props;
	const settingKey = settingName as keyof AllSettings;
	const settingValue = useSettings(settingKey);
	const [inputValue, setInputValue] = useInput(settingValue);

	function inputBlur() {
		try {
			const number = parseFloat(inputValue);
			setSetting(settingKey, number);
		} catch (err) {
			toastError('Invalid input. Could not save setting');
		}
	}

	function updateSetting(val: any) {
		setSetting(settingKey, val);
	}

	let body: ReactNode = null;
	if (isSwitch) {
		body = <Switch onChange={(on) => updateSetting(on)} on={settingValue as boolean} />;
	}

	if (isNumberInput) {
		body = (
			<div className="max-w-[100px]">
				<Input
					type="number"
					value={inputValue}
					name={settingName}
					step={step}
					onChange={setInputValue}
					onBlur={inputBlur}
				/>
			</div>
		);
	}

	if (children) {
		body = children;
	}

	let content: ReactNode = (
		<div
			className={classNames(
				'flex w-full justify-between',
				vertical ? 'flex-col justify-start' : 'flex-row',
			)}
		>
			<div
				className={classNames(
					'box-border table text-left',
					vertical ? 'mb-2.5 w-full' : 'w-[300px]',
				)}
			>
				<legend
					className={classNames(
						'text-text',
						sub ? 'text-[1.1rem] leading-6 font-normal opacity-90' : 'text-[1.2rem]',
					)}
				>
					{title}
				</legend>
				{description && (
					<p className="text-text mt-[5px] text-[0.9rem] leading-[1.3rem] opacity-70">
						{description}
					</p>
				)}
			</div>
			<div className={classNames('flex flex-col items-end', vertical && 'w-full')}>
				{body}
			</div>
		</div>
	);

	if (loggedInOnly) {
		content = <LoggedInOnly>{content}</LoggedInOnly>;
	}

	return (
		<div
			className={classNames(
				'mt-[30px] box-border min-h-10 w-full items-start pb-[30px]',
				!nested && 'border-tmo-background/10 mb-5 border-b-[3px] last:border-b-0',
				parent && 'pb-0',
				nested && 'pl-5',
			)}
		>
			{content}
		</div>
	);
}
