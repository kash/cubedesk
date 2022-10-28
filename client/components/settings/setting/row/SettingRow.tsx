import React, {ReactNode} from 'react';
import './SettingRow.scss';
import block from '../../../../styles/bem';
import Switch from '../../../common/switch/Switch';
import {setSetting} from '../../../../db/settings/update';
import {toastError} from '../../../../util/toast';
import {useInput} from '../../../../util/hooks/useInput';
import Input from '../../../common/inputs/input/Input';
import ProOnly from '../../../common/pro_only/ProOnly';
import {useSettings} from '../../../../util/hooks/useSettings';
import {AllSettings} from '../../../../db/settings/query';
import LoggedInOnly from '../../../common/logged_in_only/LoggedInOnly';

const b = block('setting-row');

interface Props {
	title: string;
	settingName?: keyof AllSettings;
	description?: string;
	isSwitch?: boolean;
	sub?: boolean;
	loggedInOnly?: boolean;
	vertical?: boolean;
	proOnly?: boolean;
	isNumberInput?: boolean;
	parent?: boolean;
	step?: number;
	children?: ReactNode;
}

export default function SettingRow(props: Props) {
	const {
		children,
		loggedInOnly,
		isNumberInput,
		parent,
		proOnly,
		sub,
		vertical,
		step,
		title,
		description,
		settingName,
		isSwitch,
	} = props;
	const settingValue = useSettings(settingName);
	const [inputValue, setInputValue] = useInput(settingValue);

	function inputBlur() {
		try {
			const number = parseFloat(inputValue);
			setSetting(settingName, number);
		} catch (err) {
			toastError('Invalid input. Could not save setting');
		}
	}

	function updateSetting(val: any) {
		setSetting(settingName, val);
	}

	const desc = description && <p>{description}</p>;

	let body = null;
	if (isSwitch) {
		body = <Switch onChange={(on) => updateSetting(on)} on={settingValue as boolean} />;
	}

	if (isNumberInput) {
		body = (
			<Input
				type="number"
				value={inputValue}
				name={settingName}
				step={step}
				onChange={setInputValue}
				onBlur={inputBlur}
			/>
		);
	}

	if (children) {
		body = children;
	}

	let content = (
		<div className={b('wrapper', {vertical})}>
			<div className={b('text')}>
				<legend>{title}</legend>
				{desc}
			</div>
			<div className={b('body')}>{body}</div>
		</div>
	);

	if (loggedInOnly) {
		content = <LoggedInOnly>{content}</LoggedInOnly>;
	} else if (proOnly) {
		content = <ProOnly>{content}</ProOnly>;
	}

	return <div className={b({sub, parent})}>{content}</div>;
}
