import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { darkTheme, lightTheme } from "./theme";
// import { useRecoilValue } from "recoil";
// import { isDarkAtom } from "./atoms";

function App() {
  const [isDark, setIsDark] = useState(false)
  const toggleDark = () => setIsDark((cur) => !cur);
  // const isDark = useRecoilValue(isDarkAtom)

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router isDark={isDark} toggleDark={toggleDark} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
