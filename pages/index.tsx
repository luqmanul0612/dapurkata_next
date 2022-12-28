import Head from "next/head";
import { GetStaticProps } from "next";
import { FC } from "react";
import Homepage from "../src/containers/Homepage";
import { TBook } from "../src/types/book";
import axios from "axios";
import request from "../src/hooks/request";

type TResBook = {
  statusCode: string;
  data: TBook[]
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await request<TResBook>(`${process.env.BASE_URL}/api/book`, { method: "POST" });
  return {
    props: { data: res.data },
    revalidate: 1
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
        <link rel="icon" href="/icons/dklogo.svg" />
      </Head>
      <Homepage data={data} />
    </>
  );
};

export default Home;
