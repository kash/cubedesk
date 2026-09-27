import ButtonError from '@/components/common/inputs/Error';
import SelectField from '@/components/common/inputs/SelectField';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {useTranslation} from 'react-i18next';
import {setSetting} from '@/db/settings/update';
import {useSettings} from '@/util/hooks/useSettings';
import React, {useEffect, useState} from 'react';

interface Props {
	onComplete?: () => void;
}

export default function StackMatPicker(props: Props) {
	const {t} = useTranslation();
	const {onComplete} = props;

	const stackMatId = useSettings('stackmat_id');
	const [selectedStackMatId, setSelectedStackMatId] = useState(stackMatId);
	const [options, setOptions] = useState<MediaDeviceInfo[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (
			typeof navigator === 'undefined' ||
			!navigator ||
			!navigator.mediaDevices ||
			!navigator.mediaDevices.enumerateDevices
		) {
			return;
		}

		navigator.mediaDevices
			.enumerateDevices()
			.then((devices) => {
				const options: MediaDeviceInfo[] = [];
				const storedIds = new Set();

				for (const device of devices) {
					if (device.kind !== 'audioinput' || !device.deviceId) {
						continue;
					}

					if (storedIds.has(device.deviceId)) {
						continue;
					}
					storedIds.add(device.deviceId);
					options.push(device);
				}

				setOptions(options);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	function getStackMatFromId(id: string): MediaDeviceInfo | null {
		let stackMat: MediaDeviceInfo | null = null;
		for (const option of options) {
			if (option.deviceId === id) {
				stackMat = option;
				break;
			}
		}

		return stackMat;
	}

	function saveSelectedAudio() {
		setSetting('timer_type', 'stackmat');
		setSetting('stackmat_id', selectedStackMatId);
		onComplete?.();
	}

	function selectAudio(selectedId: string) {
		setError(null);
		setSelectedStackMatId(selectedId);
	}

	let disabled = !selectedStackMatId;

	if (selectedStackMatId) {
		const stackMat = getStackMatFromId(selectedStackMatId);

		if (!stackMat) {
			disabled = true;
		}
	}

	return (
		<div>
			<DialogHeader
				title={t('timer.stackmatPicker.title')}
				description={t('timer.stackmatPicker.description')}
			/>
			<div className="mb-2">
				<SelectField
					label={t('timer.stackmatPicker.inputLabel')}
					value={selectedStackMatId || ''}
					placeholder={t('timer.stackmatPicker.selectPlaceholder')}
					onValueChange={selectAudio}
					error={error || undefined}
					options={options.map((device) => ({
						value: device.deviceId,
						text:
							device.label.replace(/\(.+\)/g, '').trim() ||
							t('timer.stackmatPicker.unnamedInput'),
					}))}
				/>
			</div>
			<div className="flex flex-col items-start">
				<Button variant="default" disabled={disabled} onClick={saveSelectedAudio} size="lg">
					{t('timer.stackmatPicker.save')}
				</Button>
				<ButtonError text={error || undefined} />
			</div>
		</div>
	);
}
