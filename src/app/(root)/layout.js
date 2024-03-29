import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@/components/Provider/Provider";
import TanstacktQueary from "@/components/QuearClient/TanstacktQueary";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dialogify | Home",
  description: "Dialogify Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div>
            <TanstacktQueary>
              <div>{children}</div>
            </TanstacktQueary>
          </div>
        </Provider>
      </body>
    </html>
  );
}
