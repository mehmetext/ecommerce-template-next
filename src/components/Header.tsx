import React from "react";
import SignUpBadge from "./SignUpBadge";

export default function Header() {
  return (
    <div className="flex flex-col">
      <SignUpBadge />
      <header>Header</header>
    </div>
  );
}
