import type { Metadata, Viewport } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Alert from "../components/alert";


export const viewport: Viewport = {
  themeColor: '#00b3ff',
}
export const metadata:Metadata = {
  icons:{
    icon:"https://abzarghofli.ir/assets/logo.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body>
        <Navbar/>
        <Alert />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
