import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route,Link } from 'react-router-dom';
import Home from './Pages/Home.js';
import Create from './Pages/Create.js';
import Edit from './Pages/Edit.js';
import View from './Pages/view.js';


function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto ml-5'>
          <li className='nav-item'>
            <Link to={"/"} className="nav-link">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to={"/Create"} className="nav-link">Add User</Link>
          </li>
        </div>
      </nav>

      <Routes>
           <Route path= '/' element={<Home/>}  />
           <Route path= '/Create' element={<Create/>}  />
           <Route path='/edit/:id' element={<Edit />}  />
           <Route path='/view/:id' element={<View />} />
      </Routes>


    </div>
  );
}

export default App;
