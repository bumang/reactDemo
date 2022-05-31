import './App.css';
import Header from './components/Header';
import Organizations from './components/Organizations';
import SubHeaderOrg from './components/SubHeaderOrg';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import SideBar from './components/SideBar';
import SubHeaderLearners from './components/SubHeaderLearners';
import Learners from './components/Learners';

function App() {
 
 
  return (
    <Router>
        <div className="App">
        <Header/>
        <SideBar/>
        <Switch>
              <Route exact path='/'>
                <SubHeaderOrg/>
                <div className='body clearfix'>
                  <div className='body-header clearfix'>
                      <p>Overview</p>
                      <div className='empty-space-1'></div>  
                  </div>
                  <div className='organization-table'>
                  <Organizations/>
                 
                  </div> 
               </div>
              </Route>
              <Route path='/learners'>
               
                <SubHeaderLearners/>
                <div className='body clearfix'>
                  <div className='body-header clearfix'>
                      <p>Overview</p>
                      <div className='empty-space-1'></div>  
                  </div>
                  <div className='learners-table'>
                  <Learners/>
                  </div> 
               </div>
              </Route>
            </Switch>      
        </div>
    </Router>
  );
}

export default App;
