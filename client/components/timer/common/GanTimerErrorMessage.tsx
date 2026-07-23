import ModalHeader from '@/components/common/modal/ModalHeader';
import React from 'react';

interface Props {
	message: string;
}

export default function GanTimerErrorMessage({message}: Props) {
	const title = <span style={{color: 'rgb(var(--error-color))'}}>Could not connect to timer</span>;
	const description = <span style={{color: 'rgb(var(--warning-color))'}}>{message}</span>;

	return (
		<>
			<ModalHeader title={title} description={description} />
			<p>
				Things worth trying:
				<ul style={{listStyle: 'disc', margin: '1em', paddingLeft: '1em'}}>
					<li>Turn the timer off and back on, then connect again.</li>
					<li>
						Close any other tab or app that is connected to the timer. A GAN Smart Timer
						only talks to one at a time.
					</li>
					<li>
						Remove the timer from your operating system&apos;s Bluetooth settings if you
						paired it there, then retry. It should be paired from the browser, not the OS.
					</li>
					<li>
						On Chrome, visit <code>chrome://bluetooth-internals</code> to confirm the
						timer is advertising.
					</li>
				</ul>
			</p>
		</>
	);
}
