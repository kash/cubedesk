import HorizontalNav from '@/components/common/HorizontalNav';
import Input from '@/components/common/inputs/input/Input';
import PageTitle from '@/components/common/PageTitle';
import {CommunityContext} from '@/components/community/Community';
import {MagnifyingGlass} from 'phosphor-react';
import React, {useContext} from 'react';
import {useRouteMatch} from 'react-router-dom';

const TABS = [
	{
		id: 'leaderboards',
		link: '/community/leaderboards',
		value: 'Leaderboards',
	},
	{
		id: 'friends',
		link: '/community/friends/list',
		value: 'Friends',
	},
];

export default function CommunityNav() {
	const {userSearchQuery, setUserSearchQuery} = useContext(CommunityContext);

	const page = useRouteMatch().path.split('/')[2];

	function handleQueryChange(e) {
		setUserSearchQuery(e);
	}

	return (
		<div>
			<PageTitle pageName="Community">
				<div className="flex flex-row flex-wrap items-start">
					<div className="mr-2.5">
						<HorizontalNav tabId={page} tabs={TABS} />
					</div>
					<div className="ml-2.5">
						<Input
							icon={<MagnifyingGlass />}
							placeholder="Search for username"
							value={userSearchQuery}
							onChange={handleQueryChange}
						/>
					</div>
				</div>
			</PageTitle>
		</div>
	);
}
