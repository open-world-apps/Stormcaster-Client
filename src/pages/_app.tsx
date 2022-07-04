import { FC, ReactElement, useEffect } from "react";
import { Provider } from "react-redux";
import Cookie from "js-cookie";
import type { AppProps } from "next/app";

import "../styles/css/globals.css";
import "../styles/css/normalize.css";

import { UserProvider } from "../util/context/UserContext";
import { store } from "../redux/app/store";

const MyApp: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      Cookie.set("allowGeolocation", "true");
    } else {
      console.error("Geolocation is not allowed.");
    }
  });

  return (
    <UserProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </UserProvider>
  );
};

export default MyApp;
