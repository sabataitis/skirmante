import { Layout } from "../components/layout/layout";
import { Buttons, Container } from "../components/shared";

export default function FourOhFour() {
  return (
    <Layout>
      <Container
        size="large"
        className="h-screen mx-auto flex flex-col gap-4 items-center"
      >
        <h1 className="font-bold text-3xl sm:text-6xl">404</h1>
        <p className="prose-xl">Oops! It seems there's nothing here.</p>
        <Buttons buttons={[{ type: "primary", label: "Go Back", link: "" }]} />
      </Container>
    </Layout>
  );
}
