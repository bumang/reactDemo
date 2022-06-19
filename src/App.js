import "./App.css";
import Header from "./components/Header";
import Organizations from "./components/Organizations";
import SubHeaderOrg from "./components/SubHeaderOrg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import SubHeaderLearners from "./components/SubHeaderLearners";
import Learners from "./components/Learners";
import { useState } from "react";

function App() {
	const [organizationSearch, setOrganizationSearch] = useState("");

	return (
		<Router>
			<div className="App">
				<Header />
				<SideBar />
				<Switch>
					<Route exact path="/">
						<SubHeaderOrg
							searchValue={organizationSearch}
							onChangeSearch={setOrganizationSearch}
						/>
						<div className="body clearfix">
							<div className="body-header clearfix">
								<p>Overview</p>
								<div className="empty-space-1"></div>
							</div>
							<div className="organization-table">
								<Organizations searchValue={organizationSearch} />
							</div>
						</div>
					</Route>
					<Route path="/learners">
						<SubHeaderLearners
							searchValue={organizationSearch}
							onChangeSearch={setOrganizationSearch}
						/>
						<div className="body clearfix">
							<div className="body-header clearfix">
								<p>Overview</p>
								<div className="empty-space-1"></div>
							</div>
							<div className="learners-table">
								<Learners searchValue={organizationSearch} />
							</div>
						</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
