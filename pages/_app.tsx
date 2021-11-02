import "../styles/globals.css";
import type { AppProps } from "next/app";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../context/reducer/intex";

const store = createStore(reducer);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
