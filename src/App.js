import './App.css';
import Header from './components/Header';
import Organizations from './components/Organizations';
import SideBarOrg from './components/SideBarOrg';
import SubHeaderOrg from './components/SubHeaderOrg';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import SideBarLearners from './components/SideBarLearners';
import SubHeaderLearners from './components/SubHeaderLearners';
import Learners from './components/Learners';

function App() {
  return (
    <Router>
        <div className="App">
        <Header/>
        <Switch>
              <Route exact path='/'>
                <SideBarOrg/>
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
               <SideBarLearners/>
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
