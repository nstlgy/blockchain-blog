function HeaderSection() {
  return (
    <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-between items-center h-24">
          <div>
            <img src="assets/images/logo.svg" alt="Blockforge Logo" />
          </div>
          <div className="size-10 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderSection;
