import React, { FC, HTMLAttributes, Dispatch } from "react";
import cn from "classnames";
import styles from "./menu.module.scss";

import { Button } from "@src/components/Button";

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const Menu: FC<MenuProps> = (props) => {
  const { open, setOpen, ...rest } = props;

  return (
    <aside
      {...rest}
      className={cn(styles.menu, {
        [styles.menu_open]: open,
      })}
    >
      <header className={styles.header}>
        <Button fullwidth onClick={() => setOpen((prev) => !prev)}>
          {open ? "Close" : "O"}
        </Button>
      </header>

      <div className={styles.content}></div>

      <footer className={styles.footer}></footer>
    </aside>
  );
};
