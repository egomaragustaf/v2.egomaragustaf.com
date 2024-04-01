export function BackgroundGrid() {
  return (
    <div className="h-[40rem] -z-20 top-0 left-0 right-0 w-full dark:bg-background bg-white  dark:bg-grid-slate-500/[0.1] bg-grid-background/[0.2] absolute flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,background)]"></div>
    </div>
  );
}
