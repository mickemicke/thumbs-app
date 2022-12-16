import { Suspense } from "react";
import ClientComponent from "./components/ClientComponent";
import ServerComponent from "./components/ServerComponent";
import ServerSideGqlComponent from "./components/ServerSideGqlComponent";

const getData = async () => {
  await new Promise((r) => setTimeout(r, 1000));
};

export default async function Home() {
  await getData();
  return (
    <div>
      <ClientComponent />
      <Suspense fallback={"loading Action!"}>
        {/* @ts-expect-error Server Component */}
        <ServerComponent />
      </Suspense>
      <Suspense fallback={<div>loading pokemon...</div>}>
        {/* @ts-expect-error Server Component */}
        <ServerSideGqlComponent />
      </Suspense>
    </div>
  );
}
