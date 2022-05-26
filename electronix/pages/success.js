import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCart, setTotalPrice, setTotalQuantities } = useStateContext();
  const [order, SetOrder] = useState(null);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
      </div>
    </div>
  );
};

export default Success;
