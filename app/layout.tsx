import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { ClerkProvider } from "@clerk/nextjs/app-beta";

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
      <ClerkProvider>
        <body className="h-full bg-neutral-900 text-white">
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
      </ClerkProvider>
    </html>
  );
}
