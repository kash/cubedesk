import ConfirmDialog from '@/components/common/ConfirmDialog';
import {Button} from '@/components/ui/button';
import {api} from '@/util/api';
import React from 'react';
import {useTranslation} from 'react-i18next';

export default function DangerZone() {
	const {t} = useTranslation();
	const deleteAccountMutation = api.user.deleteAccount.useMutation();

	async function deleteAccount() {
		await deleteAccountMutation.mutateAsync();
		window.location.href = '/';
	}

	return (
		<div>
			<p>{t('auth.deleteAccountWarning')}</p>
			<ConfirmDialog
				labels={{
					cancel: t('common.cancel'),
					inputPrompt: t('common.confirmInputPrompt', {word: t('common.confirmWord')}),
					confirmWord: t('common.confirmWord'),
					genericError: t('common.genericError'),
					defaultDescription: t('common.confirmDescription'),
				}}
				{...{
					title: t('auth.deleteAccount'),
					description: t('auth.deleteAccountConfirm'),
					triggerAction: deleteAccount,
					buttonText: t('auth.deleteAccountAndData'),
				}}
			>
				<Button variant="destructive" size="lg">
					{t('auth.deleteAccount')}
				</Button>
			</ConfirmDialog>
		</div>
	);
}
