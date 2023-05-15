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
    <html lang="en" className="h-full scroll-smooth ">
      <body className="h-full text-white bg-neutral-900">
        <div className="min-h-full ">
          <Navigation>
            <main className="-mt-32">
              <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </Navigation>
          <Footer />
        </div>
      </body>
    </html>
  );
}
