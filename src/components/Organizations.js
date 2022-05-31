import FilterIcon from "../assets/icons/filterIcon";
import DropDown from "../assets/icons/dropDown";
import UseFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const Organizations = () => {
  const { data, isPending, error } = UseFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData,setFilterData] = useState(data ? data.slice((currentPage-1)*rowsPerPage,rowsPerPage) :[]) 

  useEffect(()=>{
    setFilterData(data ? data.slice((currentPage-1)*rowsPerPage,rowsPerPage) :[]);
  },[rowsPerPage,currentPage])

  return (
    <div className="body-wrapper">
      <div className="o-t-wrapper">
        <div className="organizations-upper clearfix">
          <div className="o-u-left">
            <ul>
              <li>All Organizations</li>
              <li>Apprenticeship Client</li>
            </ul>
          </div>
          <div className="o-u-right">
            <a href="#">
              <div className="filter-icon">
                <FilterIcon />
              </div>
              <div className="filters">Show Filters</div>
            </a>
          </div>
        </div>
        <div className="organizations-lower">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {!error && !isPending && (
            <table className="org-table">
              <thead>
                <tr>
                  <th>
                    <div className="checkbox-wrapper">
                      <input type="checkbox"></input>
                    </div>
                    <div className="dropdown">
                      <label htmlFor="org">
                        <DropDown />
                      </label>
                    </div>
                  </th>
                  <th>Organization Name</th>
                  <th>Sub-Domain</th>
                  <th>Date Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                 filterData.map((item, index) => {
                    return (
                      <tr className="table-body" key={index}>
                        <td>
                          <div className="checkbox-wrapper-body">
                            <input type="checkbox"></input>
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="pagination">
        <label for="cars">Rows per page </label>
        <select onChange={(e)=>setRowsPerPage(+e.target.value)} value={rowsPerPage}>
          <option value={5}>Five</option>
          <option value={10}>Ten</option>
        </select>
        <input onChange={(e)=>setCurrentPage(+e.target.value)} value={currentPage}></input>
      </div>
    </div>
  );
};

export default Organizations;
