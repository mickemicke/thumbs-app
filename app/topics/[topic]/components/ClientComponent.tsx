"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <button onClick={() => setLoading(false)}>Finish loading</button>;
  }

  return (
    <div
      style={{
        width: "50px",
        height: "100px",
        textAlign: "center",
        backgroundColor: "chocolate",
      }}
    >
      CoMeDy
    </div>
  );
}
