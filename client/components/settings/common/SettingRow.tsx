import LoggedInOnly from '@/components/common/LoggedInOnly';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Switch} from '@/components/ui/switch';
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
	const controlId = React.useId();
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
		body = (
			<Switch
				id={controlId}
				checked={Boolean(settingValue)}
				onCheckedChange={updateSetting}
				aria-label={title}
			/>
		);
	}

	if (isNumberInput) {
		body = (
			<div className="max-w-[100px]">
				<Input
					id={controlId}
					type="number"
					value={inputValue}
					name={settingName}
					step={step}
					onChange={setInputValue}
					onBlur={inputBlur}
					aria-label={title}
					className="mb-2"
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
				'flex w-full justify-between gap-4',
				vertical ? 'flex-col justify-start' : 'flex-row',
			)}
		>
			<div
				className={classNames(
					'box-border min-w-0 text-left',
					vertical ? 'w-full' : 'w-[300px] max-w-[60%]',
				)}
			>
				{!children && (isSwitch || isNumberInput) ? (
					<Label
						htmlFor={controlId}
						className={classNames('text-base leading-snug', {'opacity-90': sub})}
					>
						{title}
					</Label>
				) : (
					<Label asChild className={classNames('text-base leading-snug', {'opacity-90': sub})}>
						<span>{title}</span>
					</Label>
				)}
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
				!nested && 'border-tmo-background/10 mb-5 border-b last:border-b-0',
				parent && 'pb-0',
				nested && 'pl-5',
			)}
		>
			{content}
		</div>
	);
}
