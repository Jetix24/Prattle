"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DashboardPage from '../dashboard/page';
import Navbar from '@/components/user/perfil/navbar/Navbar';
import SearchBar from '@/components/user/perfil/navbar/SearchBar';
import styles from '@/app/dashboard/dashboard.module.css';
import useSWR from 'swr';

const fetchPosts = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return response.json();
}

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search?.get('q') : null;
  const encodedSearchQuery = encodeURI(searchQuery || '');
  
  const { data, isLoading } = useSWR(`/api/search?q=${encodedSearchQuery}`, fetchPosts);

  

  console.log('La data es:', data);

  return (
    <>
    <div className={styles.bgPrattle}>
    <nav className="flex w-full items-center p-4">
        <div className="my-2 mx-3 hidden lg:block">
            <img src="/img/logo_blanc.png" className="h-24 w-auto object-contain" alt="Logo" />
        </div>
        <SearchBar />
    </nav>
    </div>
    <div>
      <h1>Search Page</h1>
    </div>
    </>
  );
};

const SuspenseWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SearchPage />
  </Suspense>
);

export default SuspenseWrapper;