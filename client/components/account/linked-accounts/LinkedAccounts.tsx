import IntegrationService from '@/components/account/linked-accounts/IntegrationService';
import {Card, CardContent} from '@/components/ui/card';
import React from 'react';

export default function LinkedAccounts() {
	return (
		<div className="grid max-w-[600px] grid-cols-[repeat(auto-fit,minmax(min(100%,288px),1fr))] gap-6">
			<Card>
				<CardContent>
					<IntegrationService integrationType="wca" />
				</CardContent>
			</Card>
			<Card>
				<CardContent>
					<IntegrationService integrationType="discord" />
				</CardContent>
			</Card>
		</div>
	);
}
