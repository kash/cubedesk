import React from 'react';
import Loading from '@/components/common/Loading';
import Empty from '@/components/common/Empty';
import SmartManage from '@/components/timer/smart-cube/manage-smart-cubes/SmartManage';
import {api} from '@/util/api';

export default function ManageSmartCubes() {
	const smartDevicesQuery = api.smartDevice.list.useQuery();
	const smartDevices = smartDevicesQuery.data;

	let body;
	if (!smartDevices) {
		body = <Loading />;
	} else if (!smartDevices.length) {
		body = <Empty text="You have not connected any smart cubes yet" />;
	} else {
		body = smartDevices.map((sc) => <SmartManage key={sc.id} cube={sc} />);
	}

	return (
		<div className="w-full">
			<div className="min-h-[140px] w-full">{body}</div>
		</div>
	);
}
