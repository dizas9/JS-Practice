import React, { useState } from "react";

export default function Input() {
  const [data, setData] = useState("");

  return (
    <div>
      <input
        type="text"
        className=""
        placeholder="Hello from hg"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
}
