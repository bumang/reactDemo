import FilterIcon from "../assets/icons/filterIcon";
import DropDown from "../assets/icons/dropDown";

const Organizations = () => {
    return (  
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
                        <th>Organization Name</th>
                        <th>Sub-Domain</th>
                        <th>Date Created</th>
                        <th>Action</th>
                        <tr>
                            <td>
                                hellow
                            </td>
                        </tr>
                    </tr>
                </table>
            </div>
        </div>
        


        
    );
}
 
export default Organizations;