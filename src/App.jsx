import LoginPage from './component/LoginPage/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './component/SignUp/SignUp';
import {Routes,Route} from 'react-router-dom'
import FreeTrialPage from './component/FreeTrialPage/FreeTrialPage';
import FreeAccount from './component/FreeAccount/FreeAccount';
import CreateUser from './component/CreateUser/CreateUser';
import FreeTrailCreate from './component/FreeTrailCreate/FreeTrailCreate';

function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/freetrial' element={<FreeTrialPage/>}/>
      <Route path='/freeaccount' element={<FreeAccount/>}/>
      <Route path='/createuser' element={<CreateUser/>}/>
      <Route path='/freetrailcreate' element={<FreeTrailCreate/>}/>
    </Routes>
  )
}

export default App;
