import React, { FC, useState, useEffect } from "react";

import { Menu } from "@src/components/Menu";
import { Button } from "@src/components/Button";

import { func } from "./utils";

import styles from "./app.module.scss";

export const App: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Menu open={open} setOpen={setOpen} />

      <div className={styles.content}>
        <header>HEADER</header>

        <main>
          {/* <Button size="s" onClick={() => setOpen((prev) => !prev)}>
            <span>sdhgvsdkjgv</span>
            <span>svhsdjkvbsdipoibiasvbusi</span>
          </Button> */}
        </main>
      </div>
    </div>
  );
};
