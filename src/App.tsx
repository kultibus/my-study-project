import React, { FC, useState, useEffect } from "react";

import { Menu } from "@src/components/Menu";

import { func } from "./utils";

import styles from "./app.module.scss";

export const App: FC = () => {
  const [cnt, setCnt] = useState<number>(0);

  console.log(styles);

  useEffect(() => {
    console.log(func(cnt));
  }, [cnt]);

  return (
    <div className={styles.container}>
      <Menu />

      <div className={styles.content}>
        <header>{`$Header ${cnt}`}</header>

        <main>
          <button
            disabled={false}
            type="button"
            className={styles.button}
            onClick={() => setCnt((prev) => prev + 1)}
          >
            Тыц
          </button>
        </main>
      </div>
    </div>
  );
};
