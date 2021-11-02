import type { AppProps } from "next/app";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../context/reducer/intex";

// Theming
import { ThemeProvider } from "@mui/material";
import theme from "../utils/theming/theme";
import Layout from "../components/Layout";

const store = createStore(reducer);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
