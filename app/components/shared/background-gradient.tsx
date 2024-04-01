import { cn } from "~/utils/cn";

export function BackgroundGradient() {
  return (
    <>
      <div
        className={cn(
          "absolute left-0 right-0 -z-10 block h-96 w-full",
          "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
          "from-emerald-200/50 via-emerald-200/10 to-emerald-100/5",
          "dark:from-emerald-950 dark:via-slate-900/10 dark:to-slate-950/5"
        )}
      />
    </>
  );
}
