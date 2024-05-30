import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({weight:['400', '600', '700' ], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bank website Ing-Enmanuel",
  description: "Follw me for more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
