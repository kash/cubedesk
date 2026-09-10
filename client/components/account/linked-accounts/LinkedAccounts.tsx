import IntegrationService from '@/components/account/linked-accounts/IntegrationService';
import React from 'react';

export default function LinkedAccounts() {
	return (
		<div className="space-y-3">
			<IntegrationService integrationType="wca" />
			<IntegrationService integrationType="discord" />
		</div>
	);
}
