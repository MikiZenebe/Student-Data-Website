import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Toaster
        toastOptions={{
          duration: 1500,
          position: "top-right",
        }}
      />
      <App />
    </BrowserRouter>
  </Provider>
);
