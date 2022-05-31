import ArrowIcon from "../assets/icons/arrowIcon";
import Dashboard from "../assets/icons/dashboardIcon";
import PaymentLog from "../assets/icons/paymentLog";
import UserIcon from "../assets/icons/userIcon";
import SettingLogo from "../assets/icons/settingLogo";
import LearnersArrow from "../assets/icons/learnersArrow";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuData ={
    dashboard:['1','2','3'],
    learners:['Overview','Passwords','Login'],

}



const SideBarLearners = () => {

    const [mainMenu,setMainMenu]= useState('dashboard');
    const [subMenu,setSubMenu]=useState('1');
    
    const capitalize=   (word) =>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    }

    const handleMenu =(menuItem)=>{
        setMainMenu(menuItem);
        switch(menuItem){
            case 'dashboard': 
                setSubMenu('1');
                break;
            case 'payment':
                break;
            case 'learners':
                setSubMenu('Overview');
                break;
            default:
                break;

        }
    }

    return (  
        <div className="L-sidebar-wrapper">
            <div className="L-sidebar-left">
                <ul>
                    <Link to='/' onClick={()=>handleMenu('dashboard')}>
                        <li  className="clearfix">
                                <div className="icon">
                                    <Dashboard/>
                                </div>
                        </li>
                    </Link>
                        
                    <Link to='/' onClick={()=>setMainMenu('payment')}>
                        <li  className="clearfix">
                            <div className="icon">
                            <PaymentLog/>
                            </div>
                        </li>
                    </Link>
                    
                    <Link to='/learners' onClick={()=>handleMenu('learners')}>
                        <li  className="clearfix">
                                <div className="icon">
                                    <UserIcon/>
                                </div>
                            </li>
                    </Link>  
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
                        {capitalize(mainMenu)}
                    </div>
                </div>
                    <div className="learners-body">
                        <ul>
                            {
                            menuData[mainMenu] && menuData[mainMenu].map((item,index)=>{
                               return <li className={subMenu===item ?'red':''} 
                                        onClick={()=>setSubMenu(item)} 
                                        key={index}>
                                        {item}
                                    </li>
                            })
                            }       
                        </ul>
                    </div>
            </div>
        </div>
       
    );
}
 
export default SideBarLearners;