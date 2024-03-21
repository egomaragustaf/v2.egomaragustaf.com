import { Navbar } from "~/components/layout/navbar";
import { Footer } from "~/components/layout/footer";
import { BackgroundGradient } from "~/components/shared/background-gradient";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto flex min-h-screen flex-col">
      <BackgroundGradient />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
