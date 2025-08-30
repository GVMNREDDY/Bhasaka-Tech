import React, { useEffect, useState } from "react";
import "./tableDataStyles.css";

const TabularData = () => {
  const [apiData, setApiData] = useState([]);
  const [firstCopyData, setFirstCopyData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let data = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        // console.log("data", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(()=>{setFirstCopyData(apiData)},[apiData])

  const onChangeStore = (e) => {
    setSearchText(e.target.value);
  };

  const onClickCheck = () => {
    if(searchText == "" || searchText == " " | searchText == null || searchText.length >= 3){
      alert("please enter the text..");
      setSearchText("");
    }
    else{
      console.log(searchText);
      setSearchText("");
    }
  };

  console.log("firstCopyData : ",firstCopyData);
  // console.log("apiData", apiData);
  // console.log("searchText : ", searchText);
  return (
    <>
      <div className="table-container">
        <div className="table-searchBar-div">
          <input
            type="text"
            value={searchText}
            onChange={onChangeStore}
            placeholder="enter rthe value to search...  "
            className="search-input"
            required
          />
          <button onClick={onClickCheck} className="search-button">
            Submit
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-header">
              <tr>
                <th className="table-header-category">Category</th>
                <th className="table-header-id">ID</th>
                <th className="table-header-image">Image</th>
                <th className="table-header-title">Title</th>
                <th className="table-header-description">Description</th>
                <th className="table-header-price">Price</th>
                <th className="table-header-rating">Rating</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {firstCopyData?.map((item) => (
                <tr className="table-row" key={item.id}>
                  <td className="table-row-category">{item.category}</td>
                  <td className="table-row-id">{item.id}</td>
                  <td className="table-row-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="product-image"
                    />
                  </td>
                  <td className="table-row-title">{item.title}</td>
                  <td className="table-row-description">
                    <span className="clamp-2">{item.description}</span>
                  </td>
                  <td className="table-row-price">
                    ${item.price?.toFixed ? item.price.toFixed(2) : item.price}
                  </td>
                  <td className="table-row-rating">
                    <span className="star">★</span> {item.rating?.rate}
                    <span className="table-row-rating-count">
                      {" "}
                      ({item.rating?.count})
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TabularData;
