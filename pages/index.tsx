import Head from "next/head";
import { GetStaticProps } from "next";
import { FC } from "react";
import { bookData } from "../src/data/books";
import Homepage from "../src/containers/Homepage";
import { TBook } from "../src/types/book";

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: { data: bookData },
  };
};

type THome = {
  data: TBook[];
};

const Home: FC<THome> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/dklogo.svg" />
      </Head>
      <Homepage data={bookData} />
    </>
  );
};

export default Home;
