import React, {useContext} from 'react';
import HorizontalNav from '../../common/horizontal_nav/HorizontalNav';
import {useRouteMatch} from 'react-router-dom';
import {CommunityContext} from '../Community';
import block from '../../../styles/bem';
import Input from '../../common/inputs/input/Input';
import PageTitle from '../../common/page_title/PageTitle';
import {useDispatch} from 'react-redux';
import {MagnifyingGlass} from '@phosphor-icons/react';

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

const b = block('community');

export default function CommunityNav() {
	const dispatch = useDispatch();
	const {userSearchQuery, setUserSearchQuery} = useContext(CommunityContext);

	const page = useRouteMatch().path.split('/')[2];

	function handleQueryChange(e) {
		setUserSearchQuery(e);
	}

	return (
		<div className={b('nav')}>
			<PageTitle pageName="Community">
				<div className={b('nav-list')}>
					<HorizontalNav tabId={page} tabs={TABS} />
					<div className={b('search-input')}>
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
