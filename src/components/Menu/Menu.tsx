import React from "react";
import styles from "./menu.module.scss";

export const Menu = () => {
  return (
    <aside>
      <div className={styles.menu}>
        <header className={styles.header}></header>
        <div className={styles.content}></div>
        <footer className={styles.footer}></footer>
      </div>
    </aside>
  );
};
