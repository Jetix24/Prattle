import styles from './EmptyState.module.css';

const EmptyState = () => {
    return ( 
        <div className={styles.state}>
            <div className={styles.container}>
                <h3 className={styles.title}>
                    Select a chat or start a new conversation
                </h3>
            </div>
        </div>
     );
}
 
export default EmptyState;