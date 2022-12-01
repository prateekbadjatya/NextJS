import React from "react";
import { useRouter } from "next/router";

//http://localhost:3000/client/23/2323
const SelectedClientProject = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  const handleClick =() => {
    //Programmatically push
    // router.push('/client/Prateek')

    router.push({
      pathname: '/client/[id]',
      query: {
        id: 'Prateek'
      }
    })
  }
  return (
    <div>
      <h1>The Selected Client Project {router?.query?.clientproject}</h1>
      <button onClick={() => handleClick()}>Load Project A</button>
    </div>
  );
};

export default SelectedClientProject;
