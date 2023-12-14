import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Found from "./Found";
import "./Header.css";
export default function Header({ children }) {
  return (
    <div className="header">
      <Logo></Logo>
      {/* <Search></Search> */}
      {children}
    </div>
  );
}
