import React from "react";

import FilterableProductTable from "../../components/FilterableProductTable";

const Home = ({ products }) => {
  return (
    <>
      <h1>Home</h1>
      <FilterableProductTable products={products} />
    </>
  );
};

export default Home;
