import Head from "next/head";
import { GetStaticProps } from "next";
import { FC } from "react";
import Homepage from "../src/containers/Homepage";
import { TBook } from "../src/types/book";
import axios from "axios";

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.BASE_URL}/api/book`,
    });
    return {
      props: { data: res.data.data },
      revalidate: 1
    };
  } catch (error) {
    return {
      props: { data: [] },
      revalidate: 1
    };
  }
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
