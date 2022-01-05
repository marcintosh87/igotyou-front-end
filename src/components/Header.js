import React from "react";
import CenterNav from "./CenterNav";
import HeroImg from "./HeroImg";
import TopNav from "./TopNav";

export default function Header() {
  return (
    <div>
      <TopNav />
      <HeroImg />
      <CenterNav />
    </div>
  );
}
