import { Main } from "./src/Main";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "./src/theme/darkTheme";
import { lightTheme } from "./src/theme/lightTheme";

export default function App() {
  const [isFontLoaded] = useFonts({
    "GeneralSans-400": require("./src/assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-600": require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-700": require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <StatusBar style="auto" />
        <Main />
      </ThemeProvider>
    </>
  );
}
