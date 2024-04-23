import { Blog } from "~/components/contents/blog";
import { Layout } from "~/components/layout/layout";
import { BackgroundGridPage } from "~/components/shared/background";

export default function Route() {
  return (
    <Layout>
      <div className="site-container space-y-20 sm:space-y-32">
        <section className="site-section mt-10 lg:mt-20">
          <BackgroundGridPage />
          <Blog />
        </section>
      </div>
    </Layout>
  );
}
