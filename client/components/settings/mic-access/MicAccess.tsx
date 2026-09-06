import ButtonError from '@/components/common/inputs/Error';
import InputInfo from '@/components/common/inputs/input/InputInfo';
import {Button} from '@/components/ui/button';
import React, {useEffect, useState} from 'react';

export default function MicAccess() {
	const [status, setStatus] = useState<PermissionState | 'not-determined' | null>(null);

	// not-determined, granted, denied, restricted or unknown.

	useEffect(() => {
		updateStatus();
	}, []);

	function updateStatus() {
		if (typeof navigator === 'undefined' || !navigator?.permissions) {
			return;
		}

		navigator.permissions.query({name: 'microphone' as any}).then((permissionStatus) => {
			setStatus(permissionStatus.state);
		});
	}

	function clickAllow() {
		if (typeof navigator === 'undefined') {
			return;
		}

		navigator.mediaDevices
			.getUserMedia({audio: true})
			.then(() => {
				updateStatus();
			})
			.catch(() => {
				updateStatus();
			});
	}

	let disabled = false;
	let error = '';
	let info = '';
	if (status === 'granted') {
		disabled = true;
		info = 'Permission granted';
	} else if (status === 'denied') {
		disabled = true;
		error = 'Permission denied. Allow microphone access in your OS settings';
	} else if (status === 'not-determined') {
		disabled = false;
	}

	return (
		<div className="flex flex-col items-start">
			<Button variant="default" onClick={clickAllow} disabled={disabled}>
				{'Give Mic Access'}
			</Button>
			<ButtonError text={error} />
			<InputInfo text={info} />
		</div>
	);
}
