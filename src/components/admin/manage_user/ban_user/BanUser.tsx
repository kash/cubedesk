import {Checkbox} from '@/components/ui/checkbox';
import './BanUser.scss';
import {Input} from '@/components/ui/input';
import {InputWrapper} from '@/components/common/InputWrapper';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Textarea} from '@/components/ui/textarea';
import {IModalProps} from '@/components/common/modal/Modal';
import ModalHeader from '@/components/common/modal/modal_header/ModalHeader';
import {Button} from '@/components/ui/button';
import {UserAccount} from '@/generated/zod';
import {useInput} from '@/lib/util/hooks/useInput';
import {useToggle} from '@/lib/util/hooks/useToggle';
import {toastSuccess} from '@/lib/util/toast';
import block from '@/styles/bem';
import {api} from '@/trpc/react';
import React, {useCallback} from 'react';

const b = block('ban-user');

interface Props extends IModalProps {
	user: UserAccount;
}

export default function BanUser(props: Props) {
	const {user} = props;

	const [cheatingIn1v1, toggleCheatingIn1v1] = useToggle(false);
	const [deletePublishedSolves, toggleDeletePublishedSolves] = useToggle(true);
	const [durationCount, setDurationCount] = useInput(1);
	const [durationUnit, setDurationUnit] = useInput('day');
	const [reason, setReason] = useInput('');
	const [forever, toggleForever] = useToggle(false);

	const banUserMutation = api.admin.banUserAccount.useMutation({
		onSuccess: () => {
			const {durationText} = getDurationMinutes();
			toastSuccess(`Banned ${user.username} for ${durationText}`);
			if (props.onComplete) {
				props.onComplete();
			}
		},
	});

	const loading = banUserMutation.isPending;
	const error = banUserMutation.error?.message;

	const getDurationMinutes = useCallback(() => {
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
	}, [durationCount, durationUnit, forever]);

	const submitBan = useCallback(async () => {
		if (loading) {
			return;
		}

		const {minutes} = getDurationMinutes();
		await banUserMutation.mutateAsync({
			user_id: user.id,
			minutes,
			reason,
			cheating_in_1v1: cheatingIn1v1,
			delete_published_solves: deletePublishedSolves,
		});
	}, [
		loading,
		getDurationMinutes,
		banUserMutation,
		user.id,
		reason,
		cheatingIn1v1,
		deletePublishedSolves,
	]);

	const disabled = loading || !reason;

	return (
		<div className={b()}>
			<ModalHeader
				title={`Ban ${user.username}`}
				description="If this user has broken a rule, you can ban them here. You can either ban them for a set amount of time or forever"
			/>
			<InputWrapper label="Reason (user-facing)">
				<Textarea
					onChange={(e) => setReason(e.target.value)}
					name="reason"
					value={reason}
					className="w-full"
				/>
			</InputWrapper>
			<div className={b('duration', {forever})}>
				<InputWrapper label="Count">
					<Input
						disabled={forever}
						type="number"
						name="durationCount"
						value={durationCount}
						onChange={setDurationCount}
					/>
				</InputWrapper>
				<InputWrapper label="Duration type">
					<Select
						disabled={forever}
						name="durationType"
						value={durationUnit}
						onValueChange={setDurationUnit}
					>
						<SelectTrigger>
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="minute">Minute</SelectItem>
							<SelectItem value="hour">Hour</SelectItem>
							<SelectItem value="day">Day</SelectItem>
							<SelectItem value="week">Week</SelectItem>
							<SelectItem value="month">Month</SelectItem>
							<SelectItem value="year">Year</SelectItem>
						</SelectContent>
					</Select>
				</InputWrapper>
			</div>
			<div className={b('options')}>
				<div className="flex items-center space-x-2">
					<Checkbox
						id="delete-solves"
						onCheckedChange={() => toggleDeletePublishedSolves()}
						checked={deletePublishedSolves}
					/>
					<label htmlFor="delete-solves">Delete all published solves</label>
				</div>
				<div className="flex items-center space-x-2">
					<Checkbox
						id="ban-forever"
						onCheckedChange={() => toggleForever()}
						checked={forever}
					/>
					<label htmlFor="ban-forever">Ban user forever</label>
				</div>
				<div className="flex items-center space-x-2">
					<Checkbox
						id="cheating-1v1"
						onCheckedChange={() => toggleCheatingIn1v1()}
						checked={cheatingIn1v1}
					/>
					<label htmlFor="cheating-1v1">User was cheating in 1v1 (refunds ELO)</label>
				</div>
			</div>
			<Button
				disabled={disabled}
				variant="destructive"
				size="lg"
				onClick={submitBan}
				loading={loading}
				error={error}
			>
				Ban user
			</Button>
		</div>
	);
}
