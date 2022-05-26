import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import SubHeader from './components/SubHeader';
function App() {
  return (
    <div className="App">
    <Header/>
    <SideBar/>
    <SubHeader/>
      <div className='body clearfix'>
        <div className='body-header'>
          <p>Overview</p>
        </div>
        <div className='empty-space-1'></div>   
      </div>
    </div>
  );
}

export default App;
