import { useEffect, useState } from 'react';
import { NextPageContext } from "next";
import styles from "./search.module.css";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Navbar from "@/components/user/perfil/navbar/Navbar";
import SearchResults from '@/components/user/perfil/navbar/SearchResults';


async function SearchPage() {
  const currentUser = await getCurrentUser();

  return (
      <div className={`h-screen ${styles.bgPrattle}`}>
        <Navbar currentUser={currentUser!} />
        <div>
          <SearchResults />
        </div>
      </div>
  );
}

export default SearchPage;