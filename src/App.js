import {Route,Routes} from 'react-router-dom';
import './App.css';
// import Register from '../src/components/LearnerComponent/Register';
import RegisterView from './View/RegisterView';
import UpdateUserProfileView from './View/UpdateUserProfileView';





function App() {
  
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<RegisterView/>}/>
        <Route path='/UpdateUserProfile' element={<UpdateUserProfileView/>}/>
        
        
        </Routes>      
    </div>
  );
}

export default App;
