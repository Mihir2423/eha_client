import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
import Head from "next/head";
import Header from "../components/NavbarComponent/Header";
import { DrawerHeader } from "../components/NavbarComponent/DrawerHeader";
import { Box, useMediaQuery } from "@mui/material";
import { ReduxProvider } from "../redux/provider";
import { CartProvider } from "react-use-cart";
import Footer from "../components/footer/footer";
import NextTopLoader from 'nextjs-toploader';
import Provider from "@/context/AuthContext";

export default function App({ Component, pageProps, session }) {

  const isMobile = useMediaQuery("(max-width: 768px)");
  <Head>
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
    />
  </Head>;
  return (
    <Provider>
      <CartProvider>
        <ReduxProvider>
          {/* <ApolloProvider client={apolloClient}> */}
          <NextTopLoader />
            <Header />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                pt: 2,
                minHeight: "100vh",
                backgroundColor: isMobile ? "#EEEEEE" : "white",
              }}
            >
              
              <DrawerHeader />
              <Component {...pageProps} />
            </Box>
            <Footer />
          {/* </ApolloProvider> */}
        </ReduxProvider>
      </CartProvider>
    </Provider>
  );
}
