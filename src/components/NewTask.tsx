import styles from './NewTask.module.css'
import plus from '../assets/plus.svg'

export function NewTask() {
    return (
        <div className={styles.containerNewTask}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>Criar
                <img src={plus} alt="" />
            </button>
        </div>
    )
}