import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import Book from "../../src/containers/Book";
import { bookData } from "../../src/data/books";
import { TBook } from "../../src/types/book";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bookData.map((val) => ({ params: { slug: val.slug } }))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const slug = params.slug;
  return {
    props: { data: bookData?.find((val) => val.slug === slug) },
    revalidate: 10
  };
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
