import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const montserrat = localFont({
  src: "./assets/fonts/Montserrat-VariableFont_wght.ttf", // Relative path is fine if correct
  variable: "--font-montserrat",
});

const italic = localFont({
  src: "./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf",
  variable: "--font-italic",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${italic.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}