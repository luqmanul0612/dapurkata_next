import Head from "next/head";
import { GetStaticProps } from "next";
import { FC } from "react";
import data from "../data/content"
import Homepage from "../containers/Homepage";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { data },
  };
};
type THome = {
  data: any;
};

const Home: FC<THome> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/dklogo.svg" />
      </Head>
      <Homepage />
    </>
  );
};

export default Home;
