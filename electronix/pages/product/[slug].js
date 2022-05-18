import React from "react";
import { urlFor, client } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} />
          </div>
          {/* <div className="small-images-container">
            {image?.map((item, index) => (
              <img src={urlFor(item)} className="" onMouseEnter="" />
            ))}
          </div> */}
        </div>
        <div className="product-details-desc">
          <h1 className="">{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(16)</p>
          </div>
          <h4>Details</h4>
          <p>{details}</p>
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
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
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
