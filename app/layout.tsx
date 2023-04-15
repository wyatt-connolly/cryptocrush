import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        <div className="min-h-full">
          <Navbar />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
