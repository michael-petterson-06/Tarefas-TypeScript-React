import React, { useState } from "react";
import styles from "./App.module.css";
//Componentes
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TaskForm from "./components/taskform/TaskForm";
import TaskList from "./components/taskList/TaskList";

// Interfaces
import { ITask } from "./interfaces/Task";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div>
      <Header/>
        <main className={styles.main}>
          <div>
            <h2>Oque você vai fazer?</h2>
            <TaskForm
               btnText="Criar Tarefas"
               taskList={taskList}
               setTaskList={setTaskList}
             />
          </div>
          <div>
            <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
          />
          </div>
        </main>
      <Footer/>
    </div>
   
  );
}

export default App;
