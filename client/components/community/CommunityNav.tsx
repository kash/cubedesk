import HorizontalNav from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
import {CommunityContext} from '@/components/community/Community';
import {InputGroupInput, InputGroup, InputGroupAddon} from '@/components/ui/input-group';
import {MagnifyingGlass} from 'phosphor-react';
import React, {useContext} from 'react';
import {useRouteMatch} from 'react-router-dom';

const TABS = [
	{
		id: 'friends',
		link: '/community/friends/list',
		value: 'Friends',
	},
	{
		id: 'leaderboards',
		link: '/community/leaderboards',
		value: 'Leaderboards',
	},
];

export default function CommunityNav() {
	const {userSearchQuery, setUserSearchQuery} = useContext(CommunityContext);

	const page = useRouteMatch().path.split('/')[2] || 'leaderboards';

	function handleQueryChange(e) {
		setUserSearchQuery(e);
	}

	return (
		<div>
			<PageTitle
				pageName="Community"
				actions={
					<div className="flex flex-row flex-wrap items-center justify-end gap-3">
						<div className="w-full sm:w-56">
							<InputGroup>
								<InputGroupAddon>
									<MagnifyingGlass />
								</InputGroupAddon>
								<InputGroupInput
									placeholder="Search for username"
									value={userSearchQuery}
									onChange={handleQueryChange}
									aria-label={'Search for username'}
								/>
							</InputGroup>
						</div>
						<HorizontalNav tabId={page} tabs={TABS} />
					</div>
				}
			/>
		</div>
	);
}
