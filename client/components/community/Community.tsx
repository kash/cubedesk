import React, {createContext, ReactElement} from 'react';
import {useInput} from '@/util/hooks/useInput';
import CommunityNav from '@/components/community/CommunityNav';
import UserSearch from '@/components/community/UserSearch';

interface Props {
	children: ReactElement;
}

type reactState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface ICommunityContext {
	// State
	userSearchQuery: string;
	setUserSearchQuery: reactState<string>;
}

export const CommunityContext = createContext<ICommunityContext>(null as unknown as ICommunityContext);

export default function Community(props: Props) {
	const [userSearchQuery, setUserSearchQuery] = useInput('');

	const {children} = props;

	let body = children;
	if (userSearchQuery.trim()) {
		body = <UserSearch query={userSearchQuery} />;
	}

	return (
		<CommunityContext.Provider
			value={{
				userSearchQuery,
				setUserSearchQuery,
			}}
		>
			<div className="relative">
				<CommunityNav />
				{body}
			</div>
		</CommunityContext.Provider>
	);
}
