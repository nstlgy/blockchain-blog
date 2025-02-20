import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

function Tag(props: ComponentPropsWithoutRef<"div"> & { color?: string }) {
  const { children, color } = props;
  return (
    <div
      // Fuchsia will be default and "color" will be overrides
      className={twMerge(
        "px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full",
        color === "lime" && "bg-lime-500/15 text-lime-500",
      )}
    >
      {children}
    </div>
  );
}

export default Tag;
