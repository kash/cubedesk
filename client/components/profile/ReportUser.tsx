import ButtonError from '@/components/common/inputs/Error';
import {Button} from '@/components/ui/button';
import {DialogHeader} from '@/components/ui/dialog';
import {Field, FieldLabel} from '@/components/ui/field';
import {Spinner} from '@/components/ui/spinner';
import {Textarea} from '@/components/ui/textarea';
import {Serialized} from '@/types/serialized';
import {PublicUserAccount, UserAccount, UserAccountForAdmin} from '@/types/user';
import {PublicUser} from '@/types/user';
import {useInput} from '@/util/hooks/useInput';
import {toastSuccess} from '@/util/toast';
import {trpc} from '@/util/trpc';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

interface Props {
	onComplete?: () => void;
	user?: UserAccountForAdmin | PublicUserAccount | UserAccount | Serialized<PublicUser>;
}

export default function ReportUser(props: Props) {
	const {t} = useTranslation();
	const fieldId = React.useId();

	const {user} = props;

	const [reason, setReason] = useInput('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	async function reportProfile() {
		if (loading) {
			return;
		}

		setLoading(true);
		try {
			await trpc.report.reportProfile.mutate({
				userId: user!.id,
				reason,
			});
		} catch (e) {
			setError(e instanceof Error ? e.message : t('profile.reportFailed'));
			return;
		} finally {
			setLoading(false);
		}

		toastSuccess(t('profile.reportedSuccess', {name: user!.username}));

		if (props.onComplete) {
			props.onComplete();
		}
	}

	const disabled = !reason.trim();

	if (!user) {
		return null;
	}

	return (
		<div>
			<DialogHeader
				title={t('profile.reportNamedUser', {name: user.username})}
				description={t('profile.reportDescription')}
			/>
			<Field>
				<FieldLabel htmlFor={`${fieldId}-1`}>{t('common.reason')}</FieldLabel>
				<Textarea value={reason} name="reason" onChange={setReason} id={`${fieldId}-1`} />
			</Field>
			<div className="flex flex-col items-start">
				<Button
					variant="destructive"
					onClick={reportProfile}
					size="lg"
					disabled={disabled || loading}
					aria-busy={loading}
				>
					{t('profile.reportProfile')}
					{loading ? <Spinner aria-hidden="true" /> : null}
				</Button>
				<ButtonError text={error} />
			</div>
		</div>
	);
}
