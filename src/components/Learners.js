import { useEffect, useState } from "react";
import DropDown from "../assets/icons/dropDown";
import FilterIcon from "../assets/icons/filterIcon";
import UseFetch from "../hooks/useFetch";

const Learners = (props) => {
	const { searchValue } = props;
	const { data, isPending, error } = UseFetch(
		"https://jsonplaceholder.typicode.com/users"
	);

	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const [finalData, setFinalData] = useState([]);

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

	return (
		<div className="body-wrapper">
			<div className="o-t-wrapper">
				<div className="organizations-upper clearfix">
					<div className="o-u-left">
						<ul>
							<li>Learners</li>
							<li>Recently Added</li>
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
									<th>Learner Name</th>
									<th>Email ID</th>
									<th>Date Created</th>
									<th>Course Progress</th>
								</tr>
							</thead>
							<tbody>
								{finalData &&
									finalData.map((item, index) => {
										return (
											<tr className="table-body" key={index}>
												<td>{item.id}</td>
												<td>{item.name}</td>
												<td>{item.username}</td>
												<td>{item.website}</td>
												<td>{item.company.name}</td>
											</tr>
										);
									})}
							</tbody>
						</table>
					)}
				</div>
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

export default Learners;
