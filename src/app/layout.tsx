import { ReactNode } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
    </body>
    </html>
  );
};

export default Layout;
