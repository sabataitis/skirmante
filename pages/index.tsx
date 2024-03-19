import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import { Layout, SEOProps } from "../components/layout/layout";
import { Blocks } from "../components/utils/blocks-renderer";
import FourOhFour from "./404";

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { data } = useTina(props);

  if (!data?.page) {
    return <FourOhFour />;
  }

  const seo: SEOProps = {
    title: data.page.seo_title,
    description: data.page.seo_description,
  };

  return (
      <Layout seo={seo}>
        <Blocks {...data.page} />
      </Layout>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: "index.mdx",
  });

  return {
    props: JSON.parse(JSON.stringify({ ...tinaProps })) as typeof tinaProps,
  };
};
