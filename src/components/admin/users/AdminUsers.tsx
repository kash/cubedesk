import React from 'react';
import './AdminUsers.scss';
import { api } from '@/trpc/react';
import { UserAccount } from '@/generated/zod';
import PaginatedList from '../../common/paginated_list/PaginatedList';
import ProfileRow from '../../community/profile_row/ProfileRow';
import Input from '../../common/inputs/input/Input';
import { useInput } from '@/lib/util/hooks/useInput';

export default function AdminUsers() {
  const [query, setQuery] = useInput('');

  async function fetchData(pageArgs: { take: number; skip: number; searchQuery?: string }) {
    const result = await api.admin.adminUserSearch.query({
      take: pageArgs.take,
      skip: pageArgs.skip,
      searchQuery: pageArgs.searchQuery || query,
    });

    return result;
  }

  return (
    <div className="w-full p-2">
      <div className="w-full max-w-4xl mx-auto">
        <div>
          <Input value={query} onChange={setQuery} />
        </div>
        <PaginatedList<UserAccount>
          searchQuery={query}
          fetchData={fetchData}
          getItemRow={(user) => {
            return <ProfileRow hideDropdown user={user} key={user.id} />;
          }}
        />
      </div>
    </div>
  );
}