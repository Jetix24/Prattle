"use client";
import { User } from "@prisma/client";
import { useSearchParams } from 'next/navigation';
import styles from '@/app/dashboard/dashboard.module.css';
import useSWR from 'swr';
import UsersList from '@/components/dashboard/UsersList';
import LoadingModal from "@/components/users/LoadingModal";

interface SearchResultsProps {
  currentUser: User;
}

const fetchPosts = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

const SearchResults: React.FC<SearchResultsProps> = ({ currentUser }) => {
  const search = useSearchParams();
  const searchQuery = search ? search?.get('q') : null;
  const encodedSearchQuery = encodeURI(searchQuery || '');

  const { data, isLoading } = useSWR(`/api/search?q=${encodedSearchQuery}`, fetchPosts);

  const filteredUsers = data?.users?.filter((user: User) => user.id !== currentUser.id);

  return (
    <main className={`h-screen ${styles.bgPrattle}`}>
      {isLoading && (
        <LoadingModal />
      )}
      {!isLoading && filteredUsers.length > 0 && (
        <div>
          <UsersList title="Resultados de búsqueda" items={filteredUsers}/>
        </div>
      )}
      {!isLoading && filteredUsers.length === 0 && 
        <div>
          <h1 className="text-2xl text-center text-white">No se encontraron resultados</h1>
        </div>
      }
    </main>
  );
};

export default SearchResults;
