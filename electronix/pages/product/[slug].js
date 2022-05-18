import React from "react";
import { urlFor, client } from "../../lib/client";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} />
          </div>
        </div>
      </div>
    </div>
  );
};

/*This tells next js to keep paths of product images on the index page so that they 
get pre-rendered should a user click on any product image on index page: REMEMBER Slug in Sanity essentially
is just a url*/
export const getStaticPaths = async () => {
  const query = `*[_type == "product" ]{
        slug{
            current
        }
    }`;
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`; // only return the product details of the product selected in the index page
  const productsQuery = '*[_type == "product"]'; //also fetch the other products

  const product = await client.fetch(query); //fetching data from Sanity
  const products = await client.fetch(productsQuery);

  return {
    props: {
      products,
      product,
    },
  };
};

export default ProductDetails;
