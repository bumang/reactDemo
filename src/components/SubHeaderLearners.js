import SearchIcon from "../assets/icons/searchIcon";

const SubHeaderLearners = (props) => {
	const { searchValue, onChangeSearch } = props;
	return (
		<div className="sub-header clearfix">
			<div className="sub-header-wrapper">
				<div className="s-h-left">
					<div className="s-h-l-text1">All Learners</div>
					<div className="s-h-l-text2">2246 Learners</div>
				</div>
				<div className="s-h-middle">
					<div className="search-icon">
						<SearchIcon />
					</div>
					<input
						type="search"
						placeholder="Search Organization"
						value={searchValue}
						onChange={(e) => onChangeSearch(e.target.value)}
					></input>
				</div>
				<div className="s-h-right">
					<div className="btn-1">
						<button>Bulk Import</button>
					</div>
					<div className="btn-2">
						<button>Add Learners</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubHeaderLearners;
