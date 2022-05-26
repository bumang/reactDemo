import ArrowIcon from "../assets/icons/arrowIcon";
import Dashboard from "../assets/icons/dashboardIcon";
import PaymentLog from "../assets/icons/paymentLog";
import ReportIcon from "../assets/icons/reportIcon";
import UserIcon from "../assets/icons/userIcon";
import SettingLogo from "../assets/icons/settingLogo";
import LearnersArrow from "../assets/icons/learnersArrow";

const SideBarLearners = () => {
    return (  
        <div className="L-sidebar-wrapper">
            <div className="L-sidebar-left">
                <ul>
                        <li className="clearfix">
                            <div className="icon">
                            <Dashboard/>
                            </div>
                        </li>
                    <li className="clearfix">
                        <div className="icon">
                        <PaymentLog/>
                        </div>
                    </li>
                
                    <li className="clearfix">
                        <div className="icon">
                            <UserIcon/>
                        </div>
                    </li>
                    <li className="clearfix">
                        <div className="icon">
                            <ReportIcon/>
                        </div>
                    </li>
                </ul>
                <div className="empty-space-0 clearfix"></div>
                <div className="setting-icon">
                    <SettingLogo/>
                </div>
            </div>
            <div className="L-sidebar-right">
                <div className="L-header-wrapper clearfix">
                    <div className="learners-arrow">
                        <LearnersArrow/>
                    </div>
                    <div className="learners-header">
                        Learners
                    </div>
                </div>
                    <div className="learners-body">
                        <ul>
                            <li>Overview</li>
                            <li>Passwords</li>
                            <li>User Logs</li>
                        </ul>
                    </div>
            </div>
        </div>
       
    );
}
 
export default SideBarLearners;