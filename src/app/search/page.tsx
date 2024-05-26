import { Suspense } from 'react';
import styles from "./search.module.css";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Navbar from "@/components/user/perfil/navbar/Navbar";
import SearchResults from '@/components/user/perfil/navbar/SearchResults';
import LoadingModal from "@/components/users/LoadingModal"; // Asumiendo que este componente es para mostrar un loading mientras se resuelve la suspense boundary

async function SearchPage() {
  const currentUser = await getCurrentUser();

  return (
    <div className={`h-screen ${styles.bgPrattle}`}>
      <Navbar currentUser={currentUser!} />
      <div>
        <Suspense fallback={<LoadingModal />}>
          <SearchResults currentUser={currentUser!} />
        </Suspense>
      </div>
    </div>
  );
}

export default SearchPage;
