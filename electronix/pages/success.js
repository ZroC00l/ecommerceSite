import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCart, setTotalPrice, setTotalQuantities } = useStateContext();

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You for your order</h2>
        <p className="email-msg">
          Check your email for a receipt and a confirmation of your order.
        </p>
        <p className="description">
          If your have any questions, please contact us at
          <a className="email" href="mailto:uncle_groovey@gmail.com">
            uncle_groovey@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn" width="300px">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
