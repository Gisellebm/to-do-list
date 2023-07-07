import styles from './Task.module.css'
import checked from '../assets/checked.svg'
import unchecked from '../assets/unchecked.svg'
import trash from '../assets/trash.svg'

export function Task() {

    return (
        <div className={styles.taskContainer}>
            <button className={styles.taskButton} >
                <img src={unchecked} />
            </button>

            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

            <button className={styles.deleteButton}>
                <img src={trash} alt="Lixeira" />
            </button>
        </div>
    )
}