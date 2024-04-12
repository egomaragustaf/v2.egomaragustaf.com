import { cn } from "~/utils/cn";

export function BackgroundGradient() {
  return (
    <>
      <div
        className={cn(
          "absolute left-0 right-0 -z-10 block h-96 w-full",
          "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
          "from-cyan-200/50 via-cyan-200/10 to-cyan-100/5",
          "dark:from-primary/20 dark:via-background/10 dark:to-background/5"
        )}
      />
    </>
  );
}
