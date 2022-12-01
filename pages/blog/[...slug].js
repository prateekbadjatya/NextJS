import { useRouter } from "next/router";
import React from "react";

// CATCH ALL ROUTES

// http://localhost:3000/blog/prateek
//http://localhost:3000/blog/prateek/badjatya/name
const BlogPostsPage = () => {

  const routes = useRouter();

  console.log(routes.query?.slug);
  /* 
  [
    "prateek"
 ]
  */

  /* 
 [
    "prateek",
    "badjatya",
    "name"
]
 */
  return (
    <div>
      <h1>Blog Post Page</h1>
    </div>
  );
};

export default BlogPostsPage;
