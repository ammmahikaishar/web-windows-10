import React from "react";
import { IconType } from "react-icons";

type TButton = {
  variant: "window" | "runningWindow" | "square";
  color?: "overlap" | "none";
  className?: string;
  Icon: IconType;
} & React.HTMLAttributes<HTMLButtonElement>;

const styles = {
  button: "flex-none h-10 grid place-items-center",
  window: "w-12",
  running: "",
  square: "aspect-square",
  notOverlap: "bg-[#00000080] hover:bg-[#00000040]",
  overlap: "hover:bg-[#00000040]",
};

export default function Button({
  variant,
  color,
  className = "",
  Icon,
  ...props
}: TButton) {
  const stylesColor =
    color === "none"
      ? ""
      : color === "overlap"
      ? styles.overlap
      : styles.notOverlap;

  if (variant === "window") {
    return (
      <button
        className={`${styles.button} ${styles.window} ${stylesColor} ${className}`}
        {...props}
      >
        <Icon />
      </button>
    );
  } else if (variant === "runningWindow") {
    return (
      <button
        className={`${styles.button} ${styles.running} ${stylesColor} ${className}`}
        {...props}
      >
        <Icon />
      </button>
    );
  }
  return (
    <button
      className={`${styles.button} ${styles.square} ${stylesColor} ${className}`}
      {...props}
    >
      <Icon />
    </button>
  );
}
