import React, {
  type FC,
  type PropsWithChildren,
  type HTMLAttributes,
} from "react";

import cn from "classnames";

import styles from "./button.module.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  minWidth?: number;
  size?: "xs" | "s";
  fullwidth?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { children, size = "xs", fullwidth = false, ...rest } = props;

  return (
    <button
      {...rest}
      className={cn(styles.button, styles[`_size_${size}`], {
        [styles.button_fullwidth]: fullwidth,
      })}
    >
      {children}
    </button>
  );
};
