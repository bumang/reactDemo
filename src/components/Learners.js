import DropDown from "../assets/icons/dropDown";
import FilterIcon from "../assets/icons/filterIcon";
import UseFetch from "../hooks/useFetch";

const Learners = () => {

  const {data,isPending,error}= UseFetch('https://jsonplaceholder.typicode.com/users');  

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
                    <th>
                        <div className="checkbox-wrapper">
                            <input type='checkbox'></input>
                        </div> 
                        <div className="dropdown">
                              <label for='org'><DropDown/></label>
                            </div>
                    </th>
                    <th>Learner Name</th>
                    <th>Email ID</th>
                    <th>Date Created</th>
                    <th>Course Progress</th>
                </tr>
                {error && <div>{error}</div>}
                    {isPending && <div>Loading...</div>}
                    {
                    data && data.map((item,index)=>{
                    return <tr className="table-body" key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.website}</td>
                                <td>{item.company.name}</td>
                         </tr>
                               }) 
                            }  
            </table>
        </div>
    </div>
    
    );
}
 
export default Learners;