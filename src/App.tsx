import React, { useState } from "react";
import styles from "./App.module.css";

// components
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import TaskForm from "./components/taskform/TaskForm";
import TaskList from "./components/taskList/TaskList";

// interfaces
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (title: string): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.title !== title;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.getElementById("modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);

    hideOrShowModal(false);
  };

  return (
    <div>
      <Modal
        title="Editar tarefa"
        children={
          <TaskForm btnText="Editar" taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div className={styles.todo_form}>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            taskList={taskList}
            setTaskList={setTaskList}
            btnText="Cadastrar"
          />
        </div>
        <div className="todo-container">
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
