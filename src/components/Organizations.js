import FilterIcon from "../assets/icons/filterIcon";
import DropDown from "../assets/icons/dropDown";
import UseFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const Organizations = (props) => {
	const { searchValue } = props;
	/* destructuring object 
			props = {
				searchValue: "",
			}
		
		destructuring array 
			arry = [
				"apple","orange"
			]

			const [var1,var2] = arry
				here "apple" is stored as var1 
	
	*/

	const { data, isPending, error } = UseFetch(
		"https://jsonplaceholder.typicode.com/users"
	);

	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const [finalData, setFinalData] = useState([]);
	const [activeTab, setActiveTab] = useState("all_organization");

	useEffect(() => {
		const start = (currentPage - 1) * rowsPerPage;
		const end = rowsPerPage + start;

		const filterData =
			data &&
			data.filter((item) => {
				return item.name.toLowerCase().includes(searchValue.toLowerCase());
			});
		const slicedData = filterData ? filterData.slice(start, end) : [];
		setFinalData(slicedData);
	}, [searchValue, data, rowsPerPage, currentPage]);

	/* useEffect runs when:
		useEffect (()=>{

		})  //runs on every render
		useEffect (()=>{

		},[])  //runs on first render
		useEffect (()=>{

		},[var1,var2])  //runs on first render and when dependencies array any variable changes

		useEffect (()=>{
			return ()=>{cleanup} // runs when the component unloads,unmounts
		})  //runs on every render
	*/

	return (
		<div className="body-wrapper">
			<div className="o-t-wrapper">
				<div className="organizations-upper clearfix">
					<div className="o-u-left">
						<ul>
							<li
								onClick={() => setActiveTab("all_organization")}
								className={
									activeTab === "all_organization" ? "active-class" : ""
								}
							>
								All Organizations
							</li>
							<li
								onClick={() => setActiveTab("apprenticeship_client")}
								className={
									activeTab === "apprenticeship_client" ? "active-class" : ""
								}
							>
								Apprenticeship Client
							</li>
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
				{activeTab === "all_organization" && (
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
									{finalData &&
										finalData.map((item, index) => {
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
				)}

				{activeTab === "apprenticeship_client" && (
					<div>
						<h1>apprenticeship client</h1>
					</div>
				)}
			</div>

			<div className="pagination">
				<label htmlFor="cars">Rows per page </label>
				<select
					onChange={(e) => setRowsPerPage(+e.target.value)}
					value={rowsPerPage}
				>
					<option value={5}>Five</option>
					<option value={10}>Ten</option>
				</select>
				<input
					onChange={(e) => setCurrentPage(+e.target.value)}
					value={currentPage}
				></input>
			</div>
		</div>
	);
};

export default Organizations;
