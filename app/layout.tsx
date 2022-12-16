import Link from "next/link";
import MyProvider from "./components/MyProvider";
import TopicsSidebar from "./components/TopicsSidebar";
import ApolloClient from "./topics/[topic]/components/ApolloClient";
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
        <ApolloClient>
          <div style={{ minHeight: "100vh", height: "100vh" }}>
            <nav style={{ height: "80px", backgroundColor: "salmon" }}>
              <Link href="/">Home</Link>
            </nav>
            <div
              style={{
                display: "flex",
                height: "100%",
              }}
            >
              <aside
                style={{
                  width: "180px",
                  backgroundColor: "hotpink",
                  height: "100%",
                }}
              >
                <TopicsSidebar />
              </aside>
              <MyProvider>{children}</MyProvider>
            </div>
          </div>
        </ApolloClient>
      </body>
    </html>
  );
}
