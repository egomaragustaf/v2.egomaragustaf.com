export function BackgroundGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[30rem] w-full dark:bg-background bg-white  dark:bg-grid-slate-500/[0.1] bg-grid-background/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,background)]"></div>
      <div className="relative z-20">{children}</div>
    </div>
  );
}
