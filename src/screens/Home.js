import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Foot";
import Card from "../components/Card";
import Crousel from "../components/Crousel";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Crousel />
      </div>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
