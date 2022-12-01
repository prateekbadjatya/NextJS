import Link from "next/link";
import React from "react";

//http://localhost:3000/client
const Client = () => {
  return (
    <div>
      <h1>The CLient Path</h1>
      <ul>
        <li>
          <Link href={{
            pathname: '/client/[id]',
            query: {id: 'Prateek'}
          }}>
            Client Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Client;
// '/client/Prateek'