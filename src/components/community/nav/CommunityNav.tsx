import HorizontalNav from '@/components/common/horizontal_nav/HorizontalNav';
import { Input } from '@/components/ui/input';
import PageTitle from '@/components/common/page-title/PageTitle';
import block from '@/styles/bem';
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr';
import {usePathname} from 'next/navigation';
import React, {useContext} from 'react';
import {useDispatch} from 'react-redux';
import {CommunityContext} from '../Community';

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

	const pathname = usePathname();
	const page = pathname.split('/')[2];

	function handleQueryChange(e: string) {
		setUserSearchQuery(e);
	}

	return (
		<div className={b('nav')}>
			<PageTitle pageName="Community">
				<div className={b('nav-list')}>
					<HorizontalNav tabId={page} tabs={TABS} />
					<div className={b('search-input')}>
						<div className="relative">
							<MagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
							<Input
								placeholder="Search for username"
								className="pl-10"
								value={userSearchQuery}
								onChange={(e) => handleQueryChange(e.target.value)}
							/>
						</div>
					</div>
				</div>
			</PageTitle>
		</div>
	);
}
