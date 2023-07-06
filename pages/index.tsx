import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from './layout';

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/components/Dashboard');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tech store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        {/* <h1 className={`text-red-400`}>Hello World</h1> */}
        {/* <SideBar /> */}
      </Layout>
    </div>
  );
};

export default Home;
