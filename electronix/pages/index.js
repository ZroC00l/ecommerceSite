import React from "react";
import {
  Layout,
  Product,
  FooterBanner,
  Footer,
  Navbar,
  HeroBanner,
  Cart,
} from "../components";
import { client } from "../lib/client";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2", "Product 3"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

//fetching data from Sanity
export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`; // return all products from our sanity dashboard
};

export default Home;
