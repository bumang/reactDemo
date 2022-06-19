import SearchIcon from "../assets/icons/searchIcon";

const SubHeaderOrg = (props) => {
	const { searchValue, onChangeSearch } = props;

	return (
		<div className="sub-header clearfix">
			<div className="sub-header-wrapper">
				<div className="s-h-left">
					<div className="s-h-l-text1">Organizations</div>
					<div className="s-h-l-text2">2246 Learners</div>
				</div>
				<div className="s-h-middle">
					<div className="search-icon">
						<SearchIcon />
					</div>

					{/* controlled flow */}

					<input
						type="search"
						placeholder="Search Organization"
						value={searchValue}
						onChange={(e) => onChangeSearch(e.target.value)}
					></input>

					{/* arrow function 
                        const hello = ()=> {
                            return "hello";

                        }

                        shortcut 

                        const hello = ()=> "hello";
                        const hello = ()=>
                            (<div>
                                <div>
                                {}
                                </div>
                            </div>)
                    */}
				</div>
				<div className="s-h-right">
					<button>Add Organizations</button>
				</div>
			</div>
		</div>
	);
};

export default SubHeaderOrg;
