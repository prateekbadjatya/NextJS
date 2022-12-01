import { useRouter, withRouter } from "next/router";
import React from "react";

// Page route: http://localhost:3000/portfolio/1
// http://localhost:3000/portfolio/2
// http://localhost:3000/portfolio/3
// .... sooo onn

//naming convetion is important in next JS

const PortfolioDynamicPath = () => {
  const router = useRouter();

  console.log(router.pathname)
  console.log(router.query)
  return (
    <div>
      <h1>Dynamic Path or Route</h1>
    </div>
  );
};

export default PortfolioDynamicPath;
