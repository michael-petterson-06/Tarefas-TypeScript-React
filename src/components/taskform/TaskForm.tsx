import React from "react";

// interfaces
// import { ITask } from "../interfaces/Task";

// styles
// import styles from "./TaskForm.module.css";

interface Props {
  btnText: string;
}

const TaskForm = ({btnText}: Props) => {
  
  return (
    <form>
      <div>
        Task Form
        {/* <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
        //   value={title}
        //   onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="number"
          name="difficulty"
          placeholder="Dificuldade da tarefa (1 a 5)"
        //   value={difficulty}
        //   onChange={handleChange}
        /> */}
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
