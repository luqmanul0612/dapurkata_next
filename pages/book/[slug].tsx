import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import Book from "../../src/containers/Book";
import { TBook } from "../../src/types/book";
import axios from "axios";
import request from "../../src/hooks/request";

type TBooksRes = { statusCode: string; data: TBook[] }

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await request<TBooksRes>(`${process.env.BASE_URL}/api/book`, { method: "POST" });
    const paths = res.data?.map((val) => ({ params: { slug: val.slug } }))
    return { paths, fallback: false }
  } catch (error) {
    return { paths: [], fallback: true }
  }
}

type TBookRes = { statusCode: string; data: TBook }

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const slug = params!.slug;
  try {
    const res = await request<TBookRes>(
      `${process.env.BASE_URL}/api/book`,
      {
        method: "POST",
        body: JSON.stringify({ slug }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
    return { props: { data: res.data }, revalidate: 1 };
  } catch (error) {
    return { props: { data: {} }, revalidate: 1 };
  }
};

type TBookPath = {
  data: TBook;
};

const BookPath: FC<TBookPath> = ({ data }) => {
  return (
    <>
      <Head key={data.id}>
        <title>{data.title}</title>
        <link rel="icon" href="/icons/dklogo.svg" />
      </Head>
      <Book data={data} />
    </>
  );
};

export default BookPath;
