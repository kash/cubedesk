import React from 'react';
import IntegrationService from '@/components/account/linked-accounts/IntegrationService';
import Module from '@/components/common/Module';

export default function LinkedAccounts() {
	return (
		<div>
			<Module className="mb-6 max-w-72">
				<IntegrationService integrationType="wca" />
			</Module>
			<Module className="mb-6 max-w-72">
				<IntegrationService integrationType="discord" />
			</Module>
		</div>
	);
}
