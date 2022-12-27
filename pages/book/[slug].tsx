import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import Book from "../../src/containers/Book";
import { TBook } from "../../src/types/book";
import axios from "axios";

type TBooksRes = { statusCode: string; data: TBook[] }

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios<TBooksRes>({ method: "GET", url: `${process.env.BASE_URL}/api/book`, });
  const paths = res.data.data.map((val) => ({ params: { slug: val.slug } }))
  return { paths, fallback: false }
}

type TBookRes = { statusCode: string; data: TBook }

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const slug = params.slug;
  const res = await axios<TBookRes>({ method: "GET", url: `${process.env.BASE_URL}/api/book`, data: { slug } });
  return { props: { data: res.data.data }, revalidate: 1 };
};

type TBookPath = {
  data: TBook;
};

const BookPath: FC<TBookPath> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href="/icons/dklogo.svg" />
      </Head>
      <Book data={data} />
    </>
  );
};

export default BookPath;
