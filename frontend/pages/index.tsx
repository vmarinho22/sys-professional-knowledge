import type { NextPage } from "next";
import Head from "next/head";

import { Box, Grid } from "@mui/material";
import styles from "../styles/Home.module.scss";

import Login from '../src/components/Login';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Professional Knowlege</title>
        <meta
          name="description"
          content="Sistema para gerenciar o conhecimento profissional da equipe"
        />
      </Head>

      <main>
        <Box className={styles["login"]}>
          <div className={styles["container"]}>
            <div className={styles["card"]}>
              <h1>Login</h1>
              <Login />
            </div>
          </div>
        </Box>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
