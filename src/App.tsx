import React from "react";
import styles from "./App.module.css";
//Componentes
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {

  return (
    <div>
      <Header/>
        <main className={styles.main}>
          <div>
            App
          </div>
        </main>
      <Footer/>
    </div>
   
  );
}

export default App;
