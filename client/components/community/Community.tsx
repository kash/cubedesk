import React, {createContext, ReactElement} from 'react';
import './Community.scss';
import {useInput} from '../../util/hooks/useInput';
import CommunityNav from './nav/CommunityNav';
import UserSearch from './user_search/UserSearch';
import block from '../../styles/bem';

const b = block('community');

interface Props {
	children: ReactElement;
}

type reactState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface ICommunityContext {
	// State
	userSearchQuery: string;
	setUserSearchQuery: reactState<string>;
}

export const CommunityContext = createContext<ICommunityContext>(null);

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
			<div className={b()}>
				<CommunityNav />
				{body}
			</div>
		</CommunityContext.Provider>
	);
}
