import { ThemeProvider } from "styled-components";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

const supportedChainIds = [1, 4, 137];
const connectors = {
  injected: {},
  magic: {
    apiKey: "79e048f5c4d23a943be35eeea2dc2122",
    chainId: 1,
  },
  walletconnect: {},
  walletlink: {
    appName: "thirdweb - demo",
    url: "https://thirdweb.com",
    darkMode: false,
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
