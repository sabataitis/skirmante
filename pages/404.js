import { Layout } from "../components/layout/layout";
import { Buttons, Container, Heading } from "../components/shared";

export default function FourOhFour() {
  return (
    <Layout>
      <Container
        size="large"
        className="mx-auto flex flex-col gap-4 items-center"
      >
        <Heading size="large">404</Heading>
          <p className="prose-xl">Oops! It seems there's nothing here.</p>
          <Buttons buttons={[{ type: "primary", label: "Go Back", link: "" }]} />
      </Container>
    </Layout>
  );
}
