import Layout from "@theme/Layout";
import HomepageHeader from "@site/src/components/HomepageHeader";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CliPreview from "../components/CliPreview";
import ControlPanelPreview from "../components/ControlPanelPreview";
import AMPQEndpointPreview from "../components/AMQPEndpointPreview";

export default function Home() {
  return (
    <Layout
      title={"Home"}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HomepageHeader />
        <HomepageFeatures />
        <CliPreview />
        <ControlPanelPreview />
        <AMPQEndpointPreview />
      </main>
    </Layout>
  );
}
