import {useTranslation} from 'react-i18next';
import HorizontalNav from '@/components/common/HorizontalNav';
import PageTitle from '@/components/common/PageTitle';
import {CommunityContext} from '@/components/community/Community';
import {InputGroup, InputGroupAddon, InputGroupInput} from '@/components/ui/input-group';
import {MagnifyingGlass} from 'phosphor-react';
import React, {useContext} from 'react';
import {useRouteMatch} from 'react-router-dom';

const TABS = [
	{
		id: 'friends',
		link: '/community/friends/list',
		value: 'community.friends',
	},
	{
		id: 'leaderboards',
		link: '/community/leaderboards',
		value: 'community.leaderboards',
	},
];

export default function CommunityNav() {
	const {t} = useTranslation();
	const {userSearchQuery, setUserSearchQuery} = useContext(CommunityContext);

	const page = useRouteMatch().path.split('/')[2] || 'leaderboards';

	function handleQueryChange(e) {
		setUserSearchQuery(e);
	}

	return (
		<div>
			<PageTitle
				pageName={t('community.community')}
				actions={
					<div className="flex flex-row flex-wrap items-center justify-end gap-3">
						<div className="w-full sm:w-56">
							<InputGroup>
								<InputGroupAddon>
									<MagnifyingGlass />
								</InputGroupAddon>
								<InputGroupInput
									placeholder={t('auth.searchForUsername')}
									maxLength={250}
									value={userSearchQuery}
									onChange={handleQueryChange}
									aria-label={t('auth.searchForUsername')}
								/>
							</InputGroup>
						</div>
						<HorizontalNav
							tabId={page}
							tabs={TABS.map((tab) => ({...tab, value: t(tab.value)}))}
						/>
					</div>
				}
			/>
		</div>
	);
}
