import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";
import styles from './Sidebar.module.css';

async function Sidebar({ children }: {
  children: React.ReactNode,
}) {

  return (
    <div className={styles.div}>
        <DesktopSidebar />
        <MobileFooter />
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}

export default Sidebar;