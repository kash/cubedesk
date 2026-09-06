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
			throw new Error('Invalid duration type');
		}

		if (!duration || duration < 0) {
			throw new Error('Invalid duration');
		}

		if (duration > 100) {
			throw new Error('Duration count cannot be over 100');
		}

		let minutes = duration * multipliers[durationUnit];
		let durationText = `${duration} ${durationUnit}${duration === 1 ? '' : 's'}`;

		if (forever) {
			durationText = 'forever';
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
			setError(e instanceof Error ? e.message : 'Failed to ban user');
			return;
		} finally {
			setLoading(false);
		}

		toastSuccess(`Banned ${user.username} for ${durationText}`);
		props.onComplete?.();
	}

	const disabled = loading || !reason;

	return (
		<div>
			<DialogHeader
				title={`Ban ${user.username}`}
				description="If this user has broken a rule, you can ban them here. You can either ban them for a set amount of time or forever"
			/>
			<Field>
				<FieldLabel htmlFor={`${fieldId}-1`}>{'Reason (user-facing)'}</FieldLabel>
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
					<FieldLabel htmlFor={`${fieldId}-2`}>{'Count'}</FieldLabel>
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
					legend="Duration type"
					name="durationType"
					value={durationUnit}
					onChange={setDurationUnit}
				>
					<option value="minute">Minute</option>
					<option value="hour">Hour</option>
					<option value="day">Day</option>
					<option value="week">Week</option>
					<option value="month">Month</option>
					<option value="year">Year</option>
				</NativeSelectField>
			</div>
			<div className="my-5 w-full">
				<Checkbox
					text="Delete all published solves"
					onCheckedChange={() => toggleDeletePublishedSolves()}
					checked={deletePublishedSolves}
				/>
				<Checkbox
					text="Ban user forever"
					onCheckedChange={() => toggleForever()}
					checked={forever}
				/>
				<Checkbox
					text="User was cheating in 1v1 (refunds ELO)"
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
					{'Ban user'}
					{loading ? <Spinner aria-hidden="true" /> : null}
				</Button>
				<ButtonError text={error} />
			</div>
		</div>
	);
}
