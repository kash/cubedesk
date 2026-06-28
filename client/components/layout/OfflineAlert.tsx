import {Offline} from 'react-detect-offline';

export default function OfflineAlert() {
	if (typeof window !== 'undefined' && window.location.href.indexOf('localhost') > -1) {
		return null;
	}

	return (
		<Offline>
			<div className="fixed bottom-5 right-5 z-[100000000] w-[95%] max-w-[300px] rounded-[5px] bg-error p-[15px] text-white">
				<p className="text-inherit leading-[1.4rem]">
					You are currently offline. You can continue to use CubeDesk, but no changes will be saved.
				</p>
			</div>
		</Offline>
	);
}
