import React from "react";

export default ({ children }) => (
  <section
    style={{
      display: "block",
      width: "720px",
      maxWidth: "90%",
      margin: "2rem auto"
    }}
  >
    {children}
  </section>
);
