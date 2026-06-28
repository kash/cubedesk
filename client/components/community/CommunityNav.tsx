import React, {useContext} from 'react';
import HorizontalNav from '@/components/common/horizontal_nav/HorizontalNav';
import {useRouteMatch} from 'react-router-dom';
import {CommunityContext} from '@/components/community/Community';
import Input from '@/components/common/inputs/input/Input';
import PageTitle from '@/components/common/page_title/PageTitle';
import {MagnifyingGlass} from 'phosphor-react';

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
