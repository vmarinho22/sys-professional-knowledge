import type { NextPage } from "next";
import Head from "next/head";

import { Box, Grid } from "@mui/material";

const Admin: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Admin - Professional Knowlege</title>
        <meta
          name="description"
          content="Sistema para gerenciar o conhecimento profissional da equipe"
        />
      </Head>

      <main>
        <Box>
          Admin page
        </Box>
      </main>

      <footer></footer>
    </div>
  );
};

export default Admin;
