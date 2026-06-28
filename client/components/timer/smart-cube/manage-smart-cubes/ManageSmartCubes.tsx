import React from 'react';
import {gql, useMutation, useQuery} from '@apollo/client';
import Loading from '@/components/common/loading/Loading';
import Empty from '@/components/common/empty/Empty';
import SmartManage from '@/components/timer/smart-cube/manage-smart-cubes/SmartManage';
import {SmartDevice} from '@/@types/generated/graphql';

const SMART_DEVICES_QUERY = gql`
	query Query {
		smartDevices {
			id
			name
			internal_name
			device_id
			created_at
			solves {
				id
			}
		}
	}
`;

const ADD_NEW_SMART_DEVICE_MUTATION = gql`
	mutation Mutate($originalName: String, $deviceId: String) {
		addNewSmartDevice(originalName: $originalName, deviceId: $deviceId) {
			id
			name
			internal_name
			device_id
			created_at
		}
	}
`;

export default function ManageSmartCubes() {
	const {data: smartDevices} = useQuery<{smartDevices: SmartDevice[]}>(SMART_DEVICES_QUERY);
	const [addDevice, addDeviceData] = useMutation<
		{addNewSmartDevice: SmartDevice},
		{
			originalName: string;
			deviceId: string;
		}
	>(ADD_NEW_SMART_DEVICE_MUTATION);

	async function addNew() {
		addDevice({
			variables: {
				originalName: 'Test Name',
				deviceId: '1235',
			},
		});
	}

	let body;
	if (!smartDevices?.smartDevices) {
		body = <Loading />;
	} else if (!smartDevices.smartDevices.length) {
		body = <Empty text="You have not connected any smart cubes yet" />;
	} else {
		body = smartDevices?.smartDevices.map((sc) => <SmartManage key={sc.id} cube={sc} />);
	}

	return (
		<div className="w-full">
			<div className="min-h-[140px] w-full">{body}</div>
		</div>
	);
}
