import Link from "next/link";
import MyProvider from "./components/MyProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <Link href="/">Home</Link>
        </nav>
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
