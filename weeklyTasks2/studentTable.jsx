import React, { useEffect, useState } from "react";
import "./studentTableStyles.css";

const StudentTable = () => {
  const [apiData, setApiData] = useState([]);
  const [firstCopyData, setFirstCopyData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let data = fetch("https://jsonplaceholder.typicode.com/users")
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
    if(searchText == ""){
      setFirstCopyData(apiData);
    }
  };

  const onClickCheck = () => {
    if(searchText == "" || searchText == " " || searchText == null || searchText.length >= 3){
      alert("please enter the text..");
      setSearchText("");
      setFirstCopyData(apiData);
    }
    else{
      const arr= firstCopyData.filter((i) => ((i.name.toLowerCase().includes(searchText.toLowerCase())|| (i.email.toLowerCase().includes(searchText))|| (i.phone.toString().includes(searchText)))));
      // console.log("arr : ",arr);
      setFirstCopyData(arr);
      // console.log(searchText);
      // setSearchText("");
    }
  };

  console.log("firstCopyData : ",firstCopyData[0]);
  // console.log("apiData", apiData);
  // console.log("searchText : ", searchText);
  return (
    <>
      <div className="student-table-container">
        <div className="student-table-searchBar-div">
          <input
            type="text"
            value={searchText}
            onChange={onChangeStore}
            placeholder="enter rthe value to search...  "
            className="student-search-input"
            required
          />
          <button onClick={onClickCheck} className="student-search-button">
            Submit
          </button>
        </div>
        <div className="student-table-responsive">
          <table className="table student-table-striped">
            <thead className="student-table-header">   
              <tr>
                <th className="student-table-header-id">ID</th>
                <th className="student-table-header-name">NAME</th>
                <th className="student-table-header-phone">Phone</th>
                <th className="student-table-header-username">userName</th>
                <th className="student-table-header-website">website</th>
                <th className="student-table-header-email">email</th>
                <th className="student-table-header-company">company</th>
                <th className="student-table-header-address">address</th>
              </tr>
            </thead>
            <tbody className="student-table-body">
              {firstCopyData?.map((item) => (
                <tr className="student-table-row" key={item.id}>
                  <td className="student-table-row-id">{item.id}</td>
                  <td className="student-table-row-category">{item.name}</td>
                  <td className="student-table-row-category">{item.phone}</td>
                  <td className="student-table-row-category">{item.username}</td>
                  <td className="student-table-row-category">{item.website}</td>
                  <td className="student-table-row-category">{item.email}</td>
                  <td className="student-table-row-category">{item.company.name}</td>
                  <td className="student-table-row-category">{item.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentTable;
