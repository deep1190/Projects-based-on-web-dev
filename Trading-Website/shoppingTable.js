import React, { useState, useEffect } from "react";
import CustomTable from "./component/table";
import "./App.css";
import "./index.css";

const ShoppingTable = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("");

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json()) // Parses the response as JSON
      .then((data) => {
        // Handles the parsed JSON data
        // Check if the data is an array
        if (Array.isArray(data)) {
          // Get the keys of the first object in the array to use as table headers
          const variable = data[0];
          const objectKeys = Object.keys(variable);
          setHeaders(objectKeys);
          // Set the fetched data to state
          setData(data);
        }
      });
  }, []);

  // Function to handle sorting the data
  const handleSort = () => {
    // Create a new array with sorted data based on the title
    const sortedData = [...data].sort((a, b) => {
      if (isAscending) {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setData(sortedData);
    setIsAscending(!isAscending);
  };
  //function is used to update the filter for categories in your component
  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.value);
  };
  //Function to filter data based on the selected category
  const filterDataByCategory = () => {
    if (!categoryFilter) {
      return data;
    }
    return data.filter((item) => item.category === categoryFilter);
  };

  return (
    <div id="head" className="App-Table mt-10">
      <h1 className="heading1">*---------NX BLOCK STORE---------*</h1>
      <hr />
      <div className="categoryFilter">
        <label> Filter : </label>
        <select value={categoryFilter} onChange={handleCategoryFilter}>
          <option value="" label="">
            All_Categories{" "}
          </option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      <button className="button" type="button" onClick={handleSort}>
        SORT↓ {isAscending ? "(ASC)" : "(DESC)"}
      </button>
      <CustomTable
        className="table-container"
        headers={headers}
        data={filterDataByCategory()}
      />
      <hr />
    </div>
  );
};
export default ShoppingTable;
