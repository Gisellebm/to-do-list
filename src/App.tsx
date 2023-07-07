import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Task, TaskProps } from './components/Task'
import clipboard from './assets/Clipboard.png'

export function App() {
  
  return (
    <div>
      <Header />  

      <main>
        <div className={styles.container}>
          <NewTask />
          <div className={styles.containerTasks}>
            <div className={styles.controlsTasks}>
              <p>Concluídas <span>0</span></p>
              <p>Tarefas criadas <span>0</span></p>
            </div>
            <div className={styles.noTaskRegistered}>
              <img src={clipboard} alt="Clipboard" />
              <h3>Você ainda não tem tarefas cadastradas</h3>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
            <Task/>
            <Task/>
          </div>
        </div> 
      </main>

    </div>
  )
}

export default App
