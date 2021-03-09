import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const theme = extendTheme({
  colors: {
    primary: {
      "100": "#a2cfa3",
      "400": "#87c188",
      "500": "#3f9b40",
      "600": "#3f9b40",
      "700": "#0a7e0c",
      "800": "#064a07",
      "900": "#064a07",
    },
  },
});

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <App />
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);
