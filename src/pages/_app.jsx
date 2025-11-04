import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import Header from "@/Common/Header";
import Footer from "@/Common/Footer";
import { MetaTitle } from "@/Common/MetaTitle";
import { Popup } from "@/Common/Popup";
import { useState } from "react";
import WelcomeCard from "@/Common/WelcomeCard";
import Form from "@/Common/Form";

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const handleTogglecontactForm = (value) => {
    if (typeof value === "boolean") {
      setOpen(value);
    } else {
      setOpen((prev) => !prev);
    }
  };
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider maxSnack={3}>
              <Header handleTogglecontactForm={handleTogglecontactForm} />
              <MetaTitle />
              <Component {...pageProps} handleTogglecontactForm={handleTogglecontactForm} />
              <Footer />
              <Popup open={open} onClose={() => handleTogglecontactForm(false)}>
                <button
                  className="closeButton"
                  onClick={() => handleTogglecontactForm(false)}
                  style={{ float: "right", marginBottom: "10px" }}
                >
                  ✖
                </button>
                <Form handleTogglecontactForm={handleTogglecontactForm}
                />
              </Popup>
            </SnackbarProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
