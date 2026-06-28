import React from 'react';
import ImportSection from '@/components/settings/data/import-data/ImportSection';

export default function CsTimerInstructions() {
	return (
		<div>
			<ImportSection title="How to export data from csTimer">
				<ol className="box-border list-decimal pl-[35px]">
					<li className="text-[1.1rem] leading-[1.6rem] text-text opacity-85">
						Go to{' '}
						<a className="text-text underline opacity-70" href="https://cstimer.net" target="_blank">
							cstimer.net
						</a>
					</li>
					<li className="text-[1.1rem] leading-[1.6rem] text-text opacity-85">
						Click the "Export" icon (next to the Settings button)
					</li>
					<li className="text-[1.1rem] leading-[1.6rem] text-text opacity-85">Click "Export to file"</li>
				</ol>
			</ImportSection>
		</div>
	);
}
