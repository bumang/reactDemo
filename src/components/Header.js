import LogoutButton from "../assets/icons/logoutIcon";
import logo from "../assets/img/logo.png";
import userHead from "../assets/img/user.jpg";
const Header = () => (
	<div className="header clearfix">
		<div className="logo">
			<img src={logo} alt="company logo" />
		</div>
		<div className="logout-button">
			<LogoutButton />
		</div>
		<div className="user-head">
			<img src={userHead} alt="user head" />
		</div>
	</div>
);

export default Header;
