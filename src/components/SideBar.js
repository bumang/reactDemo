import { Link } from "react-router-dom";
import ArrowIcon from "../assets/icons/arrowIcon";
import Dashboard from "../assets/icons/dashboardIcon";
import PaymentLog from "../assets/icons/paymentLog";
import ReportIcon from "../assets/icons/reportIcon";
import UserIcon from "../assets/icons/userIcon";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import SettingLogo from "../assets/icons/settingLogo";


const SideBar = () => {
    return ( 
        <div className="side-bar-wrapper">
          <div className="side-bar-upper">
          <ul>
                        <li className="clearfix">
                            <div className="icon">
                            <Dashboard/>
                            </div>
                            <div className="list-item">Dashboard</div>
                            <div className="arrow">
                                <ArrowIcon/>
                            </div>
                        </li>
                    <li className="clearfix">
                        <div className="icon">
                        <PaymentLog/>
                        </div>
                        <div className="list-item">Payment Log</div>
                        <div className="arrow">
                            <ArrowIcon/>     
                        </div>
                    </li>
                
                    <li className="clearfix">
                        <div className="icon">
                            <UserIcon/>
                        </div>
                        <div className="list-item">Organization API</div>
                        <div className="arrow">
                            <ArrowIcon/>     
                        </div>
                    </li>
                    <li className="clearfix">
                        <div className="icon">
                            <ReportIcon/>
                        </div>
                        <div className="list-item">Reports</div>
                        <div className="arrow">
                            <ArrowIcon/>        
                        </div>
                    </li>
                </ul>
          </div>
            
                <div className="empty-space-0 clearfix">sdsdsd</div>
            <div className="setting-wrapper clearfix">
                <div className="icon">
                            <SettingLogo/>
                        </div>
                        <div className="setting">Settings</div>
            </div>

        </div>
     );
}
 
export default SideBar;