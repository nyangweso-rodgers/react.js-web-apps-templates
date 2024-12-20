import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./styles/page.module.css";
import ToDoList from "./components/to-do-list/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}></div>
        <ToDoList />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
