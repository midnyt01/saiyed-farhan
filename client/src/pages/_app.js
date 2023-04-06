import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@/styles/globals.css";
config.autoAddCss = false;

import "../fontawesome.js";
import Navbar from "@/components/navbar/navbar.js";
import { GlobalProvider } from "@/context/global.context.js";
import { ContentProvider } from "@/context/content.context.js";
import Footer from "@/components/footer/footer.js";
import Theme from "@/context/theme.js";
import Notification from "@/components/notifications/notification.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalProvider>
        <ContentProvider>
          <Theme>
            <Notification />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </Theme>
        </ContentProvider>
      </GlobalProvider>
    </>
  );
}
