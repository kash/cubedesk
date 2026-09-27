import {useTranslation} from 'react-i18next';
import Checkbox from '@/components/common/Checkbox';
import ButtonError from '@/components/common/inputs/Error';
import NativeSelectField from '@/components/common/inputs/NativeSelectField';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Field, FieldLabel} from '@/components/ui/field';
import {Input} from '@/components/ui/input';
import {Spinner} from '@/components/ui/spinner';
import {AutosizeTextarea} from '@/components/ui/textarea';
import {AdminUser} from '@/types/admin';
import {Serialized} from '@/types/serialized';
import {UserAccount, UserAccountForAdmin} from '@/types/user';
import {useInput} from '@/util/hooks/useInput';
import {useToggle} from '@/util/hooks/useToggle';
import {toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';

interface Props {
	onComplete?: () => void;
	user: UserAccount | UserAccountForAdmin | Serialized<AdminUser>;
}

export default function BanUser(props: Props) {
	const {t} = useTranslation();
	const fieldId = React.useId();

	const {user} = props;

	const [cheatingIn1v1, toggleCheatingIn1v1] = useToggle(false);
	const [deletePublishedSolves, toggleDeletePublishedSolves] = useToggle(true);
	const [durationCount, setDurationCount] = useInput(1);
	const [durationUnit, setDurationUnit] = useInput('day');
	const [reason, setReason] = useInput('');
	const [forever, toggleForever] = useToggle(false);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	function getDurationMinutes() {
		const durationLabelKeys: Record<string, string> = {
			minute: 'admin.users.duration.minute',
			hour: 'admin.users.duration.hour',
			day: 'admin.users.duration.day',
			week: 'admin.users.duration.week',
			month: 'admin.users.duration.month',
			year: 'admin.users.duration.year',
		};
		const multipliers = {
			minute: 1,
			hour: 60,
			day: 60 * 24,
			week: 60 * 24 * 7,
			month: 60 * 24 * 30,
			year: 60 * 24 * 365,
		};

		let duration = durationCount;
		if (typeof duration === 'string') {
			duration = parseInt(duration, 10);
		}

		if (!multipliers[durationUnit]) {
			throw new Error(t('admin.users.invalidDurationType'));
		}

		if (!duration || duration < 0) {
			throw new Error(t('admin.users.invalidDuration'));
		}

		if (duration > 100) {
			throw new Error(t('admin.users.durationTooLong'));
		}

		let minutes = duration * multipliers[durationUnit];
		let durationText = t(durationLabelKeys[durationUnit], {count: duration});

		if (forever) {
			durationText = t('admin.users.forever');
			minutes = -1;
		}

		return {
			durationText,
			minutes,
		};
	}

	async function submitBan() {
		if (loading) {
			return;
		}

		const {minutes, durationText} = getDurationMinutes();

		setLoading(true);
		try {
			await trpc.admin.banUser.mutate({
				user_id: user.id,
				minutes,
				reason,
				cheating_in_1v1: cheatingIn1v1,
				delete_published_solves: deletePublishedSolves,
			});
		} catch (e) {
			setError(e instanceof Error ? e.message : t('admin.users.banFailed'));
			return;
		} finally {
			setLoading(false);
		}

		toastSuccess(t('admin.users.bannedFor', {name: user.username, duration: durationText}));
		props.onComplete?.();
	}

	const disabled = loading || !reason;

	return (
		<div>
			<DialogHeader
				title={t('admin.users.banNamedUser', {name: user.username})}
				description={t('admin.users.banDescription')}
			/>
			<Field>
				<FieldLabel htmlFor={`${fieldId}-1`}>{t('admin.users.reasonPublic')}</FieldLabel>
				<AutosizeTextarea
					onChange={setReason}
					name="reason"
					value={reason}
					id={`${fieldId}-1`}
				/>
			</Field>
			<div
				className={`mt-5 grid grid-cols-2 gap-5 ${forever ? 'pointer-events-none opacity-60' : ''}`}
			>
				<Field className="mb-2">
					<FieldLabel htmlFor={`${fieldId}-2`}>{t('admin.users.count')}</FieldLabel>
					<Input
						disabled={forever}
						type="number"
						name="durationCount"
						value={durationCount}
						onChange={setDurationCount}
						id={`${fieldId}-2`}
					/>
				</Field>
				<NativeSelectField
					disabled={forever}
					legend={t('admin.users.durationType')}
					name="durationType"
					value={durationUnit}
					onChange={setDurationUnit}
				>
					<option value="minute">{t('common.minute')}</option>
					<option value="hour">{t('common.hour')}</option>
					<option value="day">{t('common.day2')}</option>
					<option value="week">{t('common.week')}</option>
					<option value="month">{t('common.month')}</option>
					<option value="year">{t('common.year')}</option>
				</NativeSelectField>
			</div>
			<div className="my-5 w-full">
				<Checkbox
					text={t('admin.users.deletePublishedSolves')}
					onCheckedChange={() => toggleDeletePublishedSolves()}
					checked={deletePublishedSolves}
				/>
				<Checkbox
					text={t('admin.users.banForever')}
					onCheckedChange={() => toggleForever()}
					checked={forever}
				/>
				<Checkbox
					text={t('admin.users.cheatingRefundElo')}
					onCheckedChange={() => toggleCheatingIn1v1()}
					checked={cheatingIn1v1}
				/>
			</div>
			<div className="flex flex-col items-start">
				<Button
					variant="destructive"
					onClick={submitBan}
					size="lg"
					disabled={disabled || loading}
					aria-busy={loading}
				>
					{t('admin.users.ban')}
					{loading ? <Spinner aria-hidden="true" /> : null}
				</Button>
				<ButtonError text={error} />
			</div>
		</div>
	);
}
