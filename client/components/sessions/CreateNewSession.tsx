import CubePicker from '@/components/common/CubePicker';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Field, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {createSessionDb} from '@/db/sessions/update';
import {setCubeType, setCurrentSession} from '@/db/settings/update';
import {CubeType} from '@/util/cubes/cube_types';
import {useInput} from '@/util/hooks/useInput';
import {toastError} from '@/util/toast';
import {useTranslation} from 'react-i18next';
import React, {useState} from 'react';

interface Props {
	onComplete?: (session: Awaited<ReturnType<typeof createSessionDb>>) => void;
}

export default function CreateNewSession(props: Props) {
	const fieldId = React.useId();
	const {t} = useTranslation();

	const {onComplete} = props;

	const [loading, setLoading] = useState(false);
	const [sessionCubeType, setSessionCubeType] = useState('333');
	const [name, setName] = useInput('');

	function onCubeTypeChange(ct: CubeType) {
		setSessionCubeType(ct.id);
	}

	async function createSession() {
		if (loading) {
			return;
		}

		setLoading(true);

		try {
			const session = await createSessionDb({name});
			setCurrentSession(session.id);
			setCubeType(sessionCubeType);

			onComplete?.(session);
		} catch (e) {
			setLoading(false);
			toastError(t('sessions.createFailed'));
		}
	}

	const disabled = !name.trim() || loading || !sessionCubeType;

	return (
		<div className="flex flex-col items-start">
			<DialogHeader
				title={t('sessions.createNewSession')}
				description={t('sessions.organizationHint')}
			/>
			<div className="w-full">
				<Field className="mb-5">
					<FieldLabel htmlFor={`${fieldId}-1`}>{t('sessions.sessionName')}</FieldLabel>
					<Input
						placeholder={t('sessions.newSession')}
						maxLength={200}
						value={name}
						onChange={setName}
						id={`${fieldId}-1`}
					/>
				</Field>
			</div>
			<CubePicker
				labels={{
					label: t('common.cubeType'),
					placeholder: t('common.selectOption'),
					searchPlaceholder: t('common.search'),
					emptyMessage: t('common.noResultsFound'),
				}}
				pickerProps={{
					legend: t('common.cubeType'),
					info: t('sessions.youCanChangeThisLater'),
					openLeft: true,
				}}
				onChange={onCubeTypeChange}
				value={sessionCubeType}
			/>
			<div className="mt-5">
				<Button
					variant="default"
					onClick={createSession}
					size="lg"
					disabled={disabled || loading}
					aria-busy={loading}
				>
					{t('sessions.createSession')}
					{loading ? <Spinner aria-hidden="true" /> : null}
				</Button>
			</div>
		</div>
	);
}
