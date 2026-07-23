import ModalHeader from '@/components/common/modal/ModalHeader';
import React from 'react';

interface Props {
	message: string;
}

export default function SmartCubeErrorMessage({message}: Props) {
	const title = <span style={{color: 'rgb(var(--error-color))'}}>Could not connect to cube</span>;
	const description = <span style={{color: 'rgb(var(--warning-color))'}}>{message}</span>;

	return (
		<>
			<ModalHeader title={title} description={description} />
			<p>
				Things worth trying:
				<ul style={{listStyle: 'disc', margin: '1em', paddingLeft: '1em'}}>
					<li>Give the cube a turn to wake it up, then connect again.</li>
					<li>
						Close any other tab or app that is connected to the cube. A smart cube only
						talks to one at a time.
					</li>
					<li>
						Remove the cube from your operating system&apos;s Bluetooth settings if you
						paired it there, then retry. It should be paired from the browser, not the
						OS.
					</li>
					<li>
						On Chrome, visit <code>chrome://bluetooth-internals</code> to confirm the
						cube is advertising.
					</li>
				</ul>
			</p>
		</>
	);
}
