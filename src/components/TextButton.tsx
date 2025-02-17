import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

function TextButton(
  props: ComponentPropsWithoutRef<"button"> & { color?: string },
) {
  const { className, color, children } = props;
  return (
    <button
      className={twMerge(
        "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",
        color === "lime" && "text-lime-500",
        color === "cyan" && "text-cyan-500",
        color === "violet" && "text-violet-500",
        className,
      )}
    >
      {children}
    </button>
  );
}

export default TextButton;
