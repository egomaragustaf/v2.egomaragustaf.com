import { Navbar } from "~/components/layout/navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
