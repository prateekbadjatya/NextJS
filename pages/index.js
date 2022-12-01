import Link from "next/link";
import React from "react";

// page route: /


//replace: remove origin url from the back button
const HomePage = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          {/* <Link replace href="/portfolio">Portfolio</Link> */}
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link replace href="/client">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
