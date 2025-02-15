import type { ComponentPropsWithoutRef } from "react";

function CutCornerButton(props: ComponentPropsWithoutRef<"button">) {
  const { className, children } = props;
  return (
    <button className="bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-wide relative hidden md:inline-flex">
      <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]"></div>
      <svg
        className="absolute top-0 right-0 text-fuchsia-500 "
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1H12.2667L23 11.7333V24"
          stroke="currentColor"
          stroke-width="2"
        ></path>
        <span className="leading-6">Get Started</span>
      </svg>
    </button>
  );
}

export default CutCornerButton;
