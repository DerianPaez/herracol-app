import "../../styles/globals.css";
import Navigation from "@/components/Navigation";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const metadata = {
  title: "Herracol",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={lato.className}>
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>
          <h2>footer</h2>
        </footer>
      </body>
    </html>
  );
}
