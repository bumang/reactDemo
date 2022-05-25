import logo from './img/logo.png';
import userHead from './img/user.jpg';
const Header = () => {
    return ( 
        <div className='header clearfix'>
            <div className='logo'>
            <img src={logo} alt="company logo"/>
            </div>
          <div className='logout-button'>
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H2.25C2.05109 16.5 1.86032 16.421 1.71967 16.2803C1.57902 16.1397 1.5 15.9489 1.5 15.75V2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5H14.25C14.4489 1.5 14.6397 1.57902 14.7803 1.71967C14.921 1.86032 15 2.05109 15 2.25V5.25C15 5.44891 15.079 5.63968 15.2197 5.78033C15.3603 5.92098 15.5511 6 15.75 6C15.9489 6 16.1397 5.92098 16.2803 5.78033C16.421 5.63968 16.5 5.44891 16.5 5.25V2.25C16.5 1.65326 16.2629 1.08097 15.841 0.65901C15.419 0.237053 14.8467 0 14.25 0H2.25C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25L0 15.75C0 16.3467 0.237053 16.919 0.65901 17.341C1.08097 17.7629 1.65326 18 2.25 18H14.25C14.8467 18 15.419 17.7629 15.841 17.341C16.2629 16.919 16.5 16.3467 16.5 15.75V12.75C16.5 12.5511 16.421 12.3603 16.2803 12.2197C16.1397 12.079 15.9489 12 15.75 12C15.5511 12 15.3603 12.079 15.2197 12.2197C15.079 12.3603 15 12.5511 15 12.75V15.75Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.781 9.53097C23.8508 9.4613 23.9063 9.37854 23.9441 9.28742C23.9819 9.1963 24.0013 9.09862 24.0013 8.99997C24.0013 8.90132 23.9819 8.80364 23.9441 8.71252C23.9063 8.6214 23.8508 8.53864 23.781 8.46897L19.281 3.96897C19.1402 3.82814 18.9492 3.74902 18.75 3.74902C18.5508 3.74902 18.3598 3.82814 18.219 3.96897C18.0782 4.1098 17.9991 4.30081 17.9991 4.49997C17.9991 4.69913 18.0782 4.89014 18.219 5.03097L21.4395 8.24997H8.25C8.05109 8.24997 7.86032 8.32899 7.71967 8.46964C7.57902 8.61029 7.5 8.80106 7.5 8.99997C7.5 9.19888 7.57902 9.38965 7.71967 9.5303C7.86032 9.67095 8.05109 9.74997 8.25 9.74997H21.4395L18.219 12.969C18.0782 13.1098 17.9991 13.3008 17.9991 13.5C17.9991 13.6991 18.0782 13.8901 18.219 14.031C18.3598 14.1718 18.5508 14.2509 18.75 14.2509C18.9492 14.2509 19.1402 14.1718 19.281 14.031L23.781 9.53097Z" fill="black"/>
            </svg>
          </div>
          <div className='user-head'>
              <img src={userHead} alt="user head"/>
          </div>
        </div>

     );
}
 
export default Header;