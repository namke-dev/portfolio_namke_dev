import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NamKe-Dev | Personal Portfolio",
  description: "Portfolio of NamKe, a full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`
        ${inter.className} 
      bg-gray-50 
      text-gray-950
        relative
        pt-28 sm:pt-32
        dark:bg-gray-900 
        dark:text-gray-50 
        dark:text-opacity-95`}
      >
        <div
          className="bg-[#eae2fb92] -z-10
          absolute top-[-6rem] right-[11rem] 
            h-[31.25rem] w-[31.25rem]
            rounded-full blur-[10rem] 
            sm:w-[68.75rem]
            dark:bg-[#4a4061]"
        ></div>
        <div
          className="bg-[#dbd7fb] -z-10
            absolute top-[-1rem] left-[-35rem]
            h-[31.25rem] w-[50rem]
            rounded-full blur-[10rem] 
            sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] 
            xl:left-[-15rem] 2xl:left-[-5rem]
            dark:bg-[#312e54]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-center" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
