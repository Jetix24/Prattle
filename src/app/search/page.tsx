"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DashboardPage from '../dashboard/page';
import Navbar from '@/components/user/perfil/navbar/Navbar';

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search?.get('q') : null;

  const encodedSearchQuery = encodeURI(searchQuery || '');

  console.log('Search query: ', searchQuery);
  return (
    <>
    
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