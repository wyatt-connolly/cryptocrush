import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
  title: "CryptoCrush",
  description: "CryptoCrush is a cryptocurrency price tracker.",
  icons: {
    icon: "./next.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth text-white bg-neutral-900">
      <body className="h-full">
        <Navigation>
          <div className="-mt-32 px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
          </div>
        </Navigation>
        <Footer />
      </body>
    </html>
  );
}
