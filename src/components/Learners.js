import FilterIcon from "../assets/icons/filterIcon";

const Learners = () => {
    return (  
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
                    <FilterIcon/>
                </div>
                <div className="filters">
                   Show Filters
                </div>
                </a>
            </div>
        </div>
        <div className="organizations-lower">
            <table className="org-table">
                <tr>
                    <th>sdsdsds
                        {/* <div className="checkbox-wrapper">
                            <input type='checkbox'></input>
                        </div> */}

                        {/* <label for='org'><DropDown/></label> */}
                    </th>
                    <th>Learner Name</th>
                    <th>Email ID</th>
                    <th>Date Created</th>
                    <th>Course Progress</th>
                </tr>
            </table>
        </div>
    </div>
    
    );
}
 
export default Learners;