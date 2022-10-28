import React from 'react';
import './LinkedAccounts.scss';
import block from '../../../styles/bem';
import IntegrationService from './integration_service/IntegrationService';
import Module from '../../common/module/Module';

const b = block('account-linked-accounts');

export default function LinkedAccounts() {
	return (
		<div className={b()}>
			<Module>
				<IntegrationService integrationType="wca" />
			</Module>
			<Module>
				<IntegrationService integrationType="discord" />
			</Module>
		</div>
	);
}
