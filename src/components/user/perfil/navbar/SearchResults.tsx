"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/user/perfil/navbar/Navbar';
import SearchBar from '@/components/user/perfil/navbar/SearchBar';
import styles from '@/app/dashboard/dashboard.module.css';
import useSWR from 'swr';
import UsersList from '@/components/dashboard/UsersList';
import Link from 'next/link';

const fetchPosts = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return response.json();
}

const SearchResults = () => {
  const search = useSearchParams();
  const searchQuery = search ? search?.get('q') : null;
  const encodedSearchQuery = encodeURI(searchQuery || '');
  
  const { data, isLoading } = useSWR(`/api/search?q=${encodedSearchQuery}`, fetchPosts);

  

  console.log('La data es:', data);

  return (
    <main className={`h-screen ${styles.bgPrattle}`}>
        {isLoading && <p>Loading...</p>}
        {!isLoading && data && data.users && (
          <div>
            <UsersList title="Resultados de busqueda" items={data.users}/>
          </div>
        )}
        {!isLoading && (!data || !data.users) && <p>No results found.</p>}
      </main>
  );
};

export default SearchResults;