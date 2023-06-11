import React from "react";
import styles from "./App.module.css";
//Componentes
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TaskForm from "./components/taskform/TaskForm";
import TaskList from "./components/taskList/TaskList";

function App() {

  return (
    <div>
      <Header/>
        <main className={styles.main}>
          <div>
            <h2>Oque você vai fazer?</h2>
            <TaskForm btnText="Criar Tarefas"/>
          </div>
          <div>
            <h2>Suas tarefas:</h2>
          <TaskList/>
          </div>
        </main>
      <Footer/>
    </div>
   
  );
}

export default App;
