
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Sign from './components/SignIn/Sign';
import Main from './components/Main/Main';

function App() {
  return (
  
    <Routes>
        <Route  path='/' element={<Home />}>
        <Route  index  element={<Main />}/>
         <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<Sign/>} />
        </Route>
      </Routes>
    
  );
}

export default App;
