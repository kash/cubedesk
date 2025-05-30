'use client';

import IntegrationService from '@/components/account/integration-service/IntegrationService';
import {Card, CardContent} from '@/components/ui/card';

export default function LinkedAccountsPage() {
	return (
		<div>
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
