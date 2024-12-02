import Image from "next/image";
import styles from "./page.module.css";
import ToDoList from "./common/components/to-do-list/page";

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
