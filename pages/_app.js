import "../styles/globals.css";
import { AuthProvider } from "../hooks/useAuth";
import Layout from "../components/layout";
import { StyledEngineProvider } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
  <>
      <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  </>
  )
}

export default MyApp;
