import React from "react";
import { InferGetStaticPropsType } from "next";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";
import { Layout } from "../components/layout/layout";
import { Blocks } from "../components/utils/blocks-renderer";

export default function HomePage(
    props: InferGetStaticPropsType<typeof getStaticProps>,
) {
    const { data } = useTina(props);

    if (data?.global && data?.page) {
        return (
            <Layout data={data.global}>
                <Blocks {...data.page} />
            </Layout>
        );
    }
    return null;
}

export const getStaticProps = async ({ params }) => {
    const tinaProps = await client.queries.contentQuery({
        relativePath: `${params.filename}.mdx`,
    });
    const props = {
        ...tinaProps,
        enableVisualEditing: process.env.VERCEL_ENV === "preview",
    };
    return {
        props: JSON.parse(JSON.stringify(props)) as typeof props,
    };
};

export const getStaticPaths = async () => {
    const pagesListData = await client.queries.pageConnection();
    return {
        paths: pagesListData.data.pageConnection?.edges?.map((page) => ({
            params: { filename: page?.node?._sys.filename },
        })),
        fallback: false,
    };
};
