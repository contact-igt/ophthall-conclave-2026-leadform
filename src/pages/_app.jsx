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

export default function App({ Component, pageProps }) {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider maxSnack={3}>
              <Header />
              <MetaTitle />
              <Component {...pageProps} setIsModelOpen={setIsModelOpen} />
              <Footer />
            </SnackbarProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
