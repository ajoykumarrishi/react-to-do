import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Import Google Font
import WebFont from "webfontloader";

const loadFonts = () => {
  WebFont.load({
    google: {
      families: ["Roboto:400,700"],
    },
  });
};

const Root = () => {
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
