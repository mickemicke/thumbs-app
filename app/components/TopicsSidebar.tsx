"use client";
import Link from "next/link";
import { useState } from "react";

export default function TopicsSidebar() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <button onClick={() => setLoading(false)}>Finish loading</button>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href="topics/ACTION">ACTION!</Link>
      <Link href="topics/CoMeDy">CoMeDy</Link>
      <Link href="topics/Romance">Romance</Link>
    </div>
  );
}
